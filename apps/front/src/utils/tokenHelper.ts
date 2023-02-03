// TODO : Token 타입 확실히
export const tokenHelper = {
  getTokenId: () =>
    typeof window !== 'undefined'
      ? window.localStorage.getItem('TOKEN-Id') ?? ''
      : '',
  setTokenId: (token: any) => localStorage.setItem('TOKEN-Id', token),
  removeId: () => localStorage.removeItem('TOKEN-Id'),
};
