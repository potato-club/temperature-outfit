// TODO : Token 타입 확실히
export const tokenHelper = {
  getTokenId: async () => localStorage.getItem('TOKEN-Id') ?? '',
  setTokenId: (token: any) => localStorage.setItem('TOKEN-Id', token),
};
