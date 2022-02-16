import api from '../axiosConfigs'

export const getAgreementCount = async (petitionId: string) => {
  if (petitionId.length === 6 || petitionId === 'undefined') return
  const response = await api.get(`petitions/${petitionId}/agreements`)
  return response
}
