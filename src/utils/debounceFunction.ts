type Props = {
  timer: NodeJS.Timer | undefined;
  setTimer: React.Dispatch<React.SetStateAction<NodeJS.Timer | undefined>>;
  fn: () => Promise<void>;
  delay?: number;
};

export const debounceFunction = ({ timer, setTimer, fn, delay }: Props) => {
  if (timer) {
    clearTimeout(timer);
  }

  const newTimer = setTimeout(fn, delay || 1000);

  setTimer(newTimer);
};
