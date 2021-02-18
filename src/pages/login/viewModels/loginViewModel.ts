
export interface IUseLoginViewModel {
  test: String
};

const useLoginViewModel = (): IUseLoginViewModel => {

  let test = "Oi";

  return { test };
};

export default useLoginViewModel;
