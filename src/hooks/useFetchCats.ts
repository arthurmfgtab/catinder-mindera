import { useQuery } from '@tanstack/react-query';
import { Cat } from '../types/commom';
import api from '../api/api';

const fetchCats = async (): Promise<Cat[]> => {
  const response = await api.get<Cat[]>('/images/search', {
    params: {
      limit: 30,
      size: 'small',
      has_breeds: true,
    },
  });
  return response.data;
};

export default function useFetchCats() {
  return useQuery<Cat[]>({
    queryKey: ['cats'],
    queryFn: fetchCats,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
}
