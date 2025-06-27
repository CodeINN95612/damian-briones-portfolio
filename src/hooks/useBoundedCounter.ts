import { useCallback, useState } from "react";

export const useBoundedCounter = (
  initialValue: number,
  min: number,
  max: number
) => {
  const [value, setValue] = useState(initialValue);

  const next = useCallback(() => {
    setValue((prev) => (prev < max ? prev + 1 : min));
  }, [max, min]);

  const previous = useCallback(() => {
    setValue((prev) => (prev > min ? prev - 1 : max));
  }, [max, min]);

  return { value, next, previous };
};
