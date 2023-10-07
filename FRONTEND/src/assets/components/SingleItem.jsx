import { useState } from "react";
import { Wrapper, StyledCheckbox } from "./SingleItemWrapper";
import checkBoxImage from "../images/icon-check.svg";
import crossImage from "../images/icon-cross.svg";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils/base";

const SingleItem = ({ name, completed, id }) => {
  const [isChecked, setIschecked] = useState(false);

  const queryClient = useQueryClient();

  const { mutate: deleteTask } = useMutation({
    mutationFn: (id) => {
      return customFetch.delete(`/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const { mutate: updateTask } = useMutation({
    mutationFn: ({ id, completed }) => {
      return customFetch.patch(`/${id}`, { completed });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  const handleCheckBoxChange = () => {
    updateTask({ id, completed: !completed });
  };

  const handleDeleteItem = () => {
    deleteTask(id);
  };

  return (
    <Wrapper>
      <StyledCheckbox checked={completed} onClick={handleCheckBoxChange}>
        {completed && <img src={checkBoxImage} alt="check" />}
      </StyledCheckbox>

      <p className={completed ? "cross-out" : ""}>{name}</p>
      <img src={crossImage} alt="x" onClick={handleDeleteItem} />
    </Wrapper>
  );
};

export default SingleItem;
