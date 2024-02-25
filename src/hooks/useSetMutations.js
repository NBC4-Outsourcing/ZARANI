const { useMutation, useQueryClient } = require('react-query');

const useSetMutation = (fc, setInvalidate) => {
  const queryClient = useQueryClient();
  const mutation = useMutation(fc, {
    onSuccess: () => {
      queryClient.invalidateQueries(setInvalidate);
    }
  });

  return [mutation];
};

export default useSetMutation;
