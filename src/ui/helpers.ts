import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addAlert } from './main-store';

// TODO: Add an alert if the promise rejects
export function useInitialLoad(func: () => Promise<void>) {
  const dispatch = useDispatch();

  useEffect(() => {
    func().catch((err) => {
      dispatch(addAlert({
        type: 'error',
        message: err.message,
        autoHide: true
      }));
    });
  }, []);
}

export function useAsyncEffect(func: () => Promise<void>, deps: unknown[]) {
  const dispatch = useDispatch();

  useEffect(() => {
    func().catch((err) => {
      dispatch(addAlert({
        type: 'error',
        message: err.message,
        autoHide: true
      }));
    });
  }, deps);
}
