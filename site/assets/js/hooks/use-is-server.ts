import { useSyncExternalStore } from "react";

const emptySubscribe = () => () => {};

export function useIsServer() {
  return useSyncExternalStore(
    emptySubscribe,
    () => false,
    () => true,
  );
}
