import { supabase } from 'api/supabase/supabase';
import { getLocalStorageJSON } from 'utils/getLocalStorageJSON';

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
const getCommunityList = async () => {
  try {
    const data = (await supabase.from('communityWrite').select('*')).data;
    shuffle(data);
    const randomList = [data[0], data[1], data[2]];
    return randomList;
  } catch (error) {
    console.log(error);
  }
};
export const readUserLocalAccount = async () => {
  const data = await getLocalStorageJSON();
  return data;
};

export { getCommunityList };
