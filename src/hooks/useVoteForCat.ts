import { useMutation } from '@tanstack/react-query';
import { queryClient } from '../../App';
import { VotePayload } from '../types/commom';
import api from '../api/api';

const voteForCat = async ({ imageId, value }: VotePayload) => {
  const response = await api.post('/votes', {
    image_id: imageId,
    value,
  });
  return response.data;
};

export default function useVoteForCat() {
  return useMutation<void, unknown, VotePayload>({
    mutationFn: voteForCat,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cats'] });
    },
  });
}
