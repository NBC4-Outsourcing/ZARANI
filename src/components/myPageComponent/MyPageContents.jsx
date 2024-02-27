// import { useEffect, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useQuery } from 'react-query';
// import { supabase } from 'api/supabase/supabase';
// import { readUserAccount, readUserInfo, updateUserAccount, updateUserInfo, uploadImage } from './myPageSupabase';
// import { Navigate, useNavigate } from 'react-router-dom';
// import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';
// import { logout } from 'shared/redux/modules/authSlice';
// import useSetMutation from 'hooks/useSetMutations';
// import useInput from 'hooks/useInput';
// import defaultImg from 'assets/defaultProfileImage.png';
// import * as MP from 'components/styles/MyPageStyle';

// const MyPageContents = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const [isEdit, setIsEdit] = useState(false);
//   const loginState = useSelector((store) => store.auth.loginState);
//   const [selectImage, setSelectImage] = useState(defaultImg);
//   const [userAccount, setUserAccount] = useState();
//   const { isLoading, isError, data } = useQuery('usersAccounts', readUserAccount, {
//     onSuccess: (data) => {
//       const storageItem = getLocalStorageJSON();
//       const uid = storageItem.user?.id;
//       const email = storageItem.user?.email;
//       const nickname = storageItem.user?.user_metadata.nickname;
//       const avatar = storageItem.user?.user_metadata.avatar;
//       const userInfo = {
//         uid,
//         email,
//         nickname,
//         avatar
//       };
//       setUserAccount(userInfo);
//       updateUserAccount({ nickname, avatar });
//       setThumnailImage(avatar);
//       if (!storageItem || !uid || !email) {
//         console.error('유저정보가 존재하지 않습니다. 로그인해주세요.');
//         alert('유저정보가 존재하지 않습니다. 로그인해주세요.');
//         // dispatch(logout());
//         navigate('/login');
//       }

//       console.log('데이터를 성공적으로 가져왔습니다:', data);
//     }
//   });
//   const { email, nickname, avatar, uid } = userAccount || {};
//   const [thumnailImage, setThumnailImage] = useState(avatar || defaultImg);
//   console.log(thumnailImage);
//   const [mutation] = useSetMutation(updateUserInfo, 'usersAccounts');
//   const [editValue, setEditValue, onChange] = useInput({
//     nickname
//   });
//   const editValueNickname = editValue.nickname || '';
//   const storageItem = getLocalStorageJSON();
//   // const currUserEmail = storageItem.user.email;
//   // const uid = storageItem.user.id;
//   const user = supabase.auth.getUser();
//   const isLogin = loginState;
//   console.log(loginState);

//   if (isLogin === false) {
//     // dispatch(logout());
//     alert('로그인 유저만 사용가능합니다. 로그인 해주세요');
//     navigate('/login');
//   }
//   // localstorage email과 같은 데이터들 filter email === email.sort((a,b) => b-a => date())
//   useEffect(() => {
//     const myPageData = async () => {
//       try {
//         let { data: myPageInfo, error } = await supabase.from('usersAccounts').select('*');
//         if (myPageInfo) {
//           myPageInfo.forEach((userInfo) => {
//             setUserAccount(userInfo);
//             updateUserAccount(userInfo, userInfo.id);
//             setThumnailImage(userInfo.avatar);
//           });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     myPageData();
//   }, []);

//   // 이미지 등록
//   const onChangeAddImage = (e) => {
//     e.preventDefault();
//     if (selectImage === null) return;

//     const imgFile = e.target.files[0];
//     if (!imgFile) return;
//     if (imgFile) {
//       setSelectImage(imgFile);
//       let image = URL.createObjectURL(imgFile);
//       setThumnailImage(image);
//     }
//   };

//   // 브라우져 캐싱문제 해결
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     const editSaveCheck = window.confirm('수정내용을 저장하시겠습니까?');
//     if (editSaveCheck === false) {
//       alert('수정을 취소하셨습니다.');
//       setThumnailImage(avatar);
//       setIsEdit(false);
//       return;
//     }
//     if (!selectImage || selectImage.name === undefined) {
//       alert('이미지를 선택해주세요.');
//       return;
//     }
//     if (selectImage === null) return;

//     // storage 내부 저장할 위치(폴더)를 회원 uid 또는 이메일로 정하고 스토리지에 저장.
//     const uuid = crypto.randomUUID();
//     const filePath = `userOneImage/${uid}+${uuid}`;
//     try {
//       const data = await uploadImage(filePath, selectImage);
//       console.log(data);
//       const { data: imageUrl } = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
//       const ImgDbUrl = imageUrl.publicUrl;
//       const newData = { email, nickname: editValueNickname, avatar: ImgDbUrl, id };

//       await updateUserAccount({ nickname: editValueNickname, avatar: ImgDbUrl });
//       setSelectImage(ImgDbUrl);
//       setThumnailImage(newData.avatar);

//       alert('수정이 완료됐습니다.');
//       setIsEdit(false);
//     } catch (error) {
//       alert('수정이 되지 않았습니다! 다시 해주세용!');
//       return;
//     }
//   };

//   // 이미지 편집 모드
//   const onEditContentsHandler = (e) => {
//     e.preventDefault();
//     setIsEdit(true);
//     setEditValue({ nickname });
//     setThumnailImage(avatar);
//   };
//   // 이미지 편집 취소
//   const onEditCancelHandler = (e) => {
//     e.preventDefault();
//     setIsEdit(false);
//     if (isEdit && selectImage !== thumnailImage) setThumnailImage(avatar);
//   };
//   if (isLoading) return <div>로딩중입니다...</div>;
//   if (isError) return <div> 정보를 받아올 수 없습니다...</div>;
//   return (
//     <MP.MyPageContentsForm>
//       <MP.ImgWrapDiv>
//         <MP.ThumnailImg>
//           <img src={thumnailImage} alt="기본이미지" />
//         </MP.ThumnailImg>
//         <MP.ImgFileInput type="file" accept="image/*" id="imgfileChoice" onChange={onChangeAddImage} />
//         {!isEdit ? (
//           <div></div>
//         ) : (
//           <div>
//             <label htmlFor="imgfileChoice">이미지 등록</label>
//           </div>
//         )}
//       </MP.ImgWrapDiv>
//       <div>
//         {!isEdit ? (
//           <div>
//             <p>이메일 : {email}</p>
//             <p>닉네임 : {nickname} </p>
//           </div>
//         ) : (
//           <div>
//             <div>
//               <p>Email : {email}</p>
//             </div>
//             <label htmlFor="nickname"> 닉네임</label>
//             <input
//               type="text"
//               id="nickname"
//               name="nickname"
//               value={editValueNickname}
//               onChange={onChange}
//               minLength={6}
//               maxLength={10}
//               placeholder="닉네임을 적어주세요. (6자~10자 이내)"
//             />
//           </div>
//         )}
//       </div>
//       {!isEdit ? (
//         <div>
//           <button onClick={onEditContentsHandler}>수정</button>
//         </div>
//       ) : (
//         <div>
//           <button onClick={onSubmitHandler}>완료</button>
//           <button onClick={onEditCancelHandler}>취소</button>
//         </div>
//       )}
//     </MP.MyPageContentsForm>
//   );
// };

// export default MyPageContents;

// // , {
// //     onSuccess: (data) => {
// //       const storageItem = getLocalStorageJSON();
// //       const acToken = storageItem.access_token;
// //       const uid = storageItem.user.id;
// //       const email = storageItem.user.email;
// //       const nickname = storageItem.user.user_metadata.nickname;
// //       const avatar = storageItem.user.user_metadata.avatar;
// //       console.log('uid', storageItem.user.id);
// //       console.log('email', storageItem.user.email);
// //       console.log('nickname', storageItem.user.user_metadata.nickname);
// //       console.log('avatar', storageItem.user.user_metadata.avatar);
// //       const userInfo = {
// //         uid,
// //         email,
// //         nickname,
// //         avatar
// //       };
// //       setUserAccount(userInfo);
// //       updateUserAccount({ nickname, avatar });
// //       setThumnailImage(avatar);

// //       console.log('데이터를 성공적으로 가져왔습니다:', data);
// //     }
// //   }

// // const [downloadImgMutation] = useSetMutation(downloadImage, 'unAuthUserImage');

// // if (selectImage !== thumnailImage) setThumnailImage(avatar || thumnailImage);
// // if (selectImage !== thumnailImage) setThumnailImage(avatar || defaultImg);

// // 파일명에 해쉬값, => 웹팩, 이미지 요청 => 파라미터
// // 주소값으로 캐싱,
// // 캐시 방지하는 방법 =>
// // -이미지 주소에 특정 해시값.date()
// // -옵션 cashe control 사용
// // -document.querySelector('section img:nth-child(4)').src = "/ryan.gif?time=" + new Date();
// //

// //  setThumnailImage(avatar);
// // if (selectImage !== thumnailImage) setThumnailImage(avatar ? avatar : thumnailImage);
// // if (selectImage !== thumnailImage) setThumnailImage(avatar || thumnailImage);
// // useEffect(() => {
// //   // avatar가 변경될 때 thumnailImage도 함께 변경되도록 설정
// //   setThumnailImage(avatar || defaultImg);
// // }, [avatar]);

// // useEffect(() => {
// //   // 컴포넌트가 unmount될 때 이전에 생성된 이미지 URL 해제
// //   return () => {
// //     URL.revokeObjectURL(thumnailImage);
// //   };
// // }, [thumnailImage]);

// // useEffect(() => {
// //   const ImageInit = async () => {
// //     const filePath = `userImage/${uid}`;
// //     const data = await uploadImage(filePath, selectImage);
// //     const { data: imageUrl, error } = supabase.storage.from('unAuthUserImage').getPublicUrl(data.path);
// //     const ImgDbUrl = imageUrl.publicUrl;
// //     const newData = { id, email, nickname: editValueNickname, avatar: ImgDbUrl, uid };
// //     await updateUserInfo(newData, id);
// //     setThumnailImage(ImgDbUrl);
// //   };
// //   ImageInit();
// // }, []);

// // useEffect(() => {
// //   const mutationData = async () => {
// //     if (data) {
// //       console.log(avatar);
// //       setThumnailImage(avatar);
// //     }
// //   };
// //   mutationData();
// // }, [dispatch, data, avatar]);
// // 이미지, 닉네임, 내용 DB저장

// // const ImgDbUrl = `${imageUrl.data.publicUrl}?t=${new Date().getTime()}`;
// // console.log(imageUrl);
// // console.log(selectImage);
// // console.log(data);
// // console.log(ImgDbUrl);
