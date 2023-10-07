import Wrapper from "./TodoWrapper";
import sun from "../images/icon-sun.svg";
import SingleItem from "./SingleItem";
// import { StyledCheckbox } from "./SingleItemWrapper";
import checkBoxImage from "../images/icon-check.svg";
import { useState } from "react";
import moon from "../images/icon-moon.svg";
import { useGlobalContext } from "../context/context";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import customFetch from "../utils/base";

const Todo = () => {
  const [isChecked, setIschecked] = useState(false);
  const [filterTodo, setFilterTodo] = useState("all");
  const { dark, toggleDarkMode } = useGlobalContext();
  const queryClient = useQueryClient();
  console.log(filterTodo);
  const response = useQuery({
    queryKey: ["todo"],
    queryFn: async () => {
      const { data } = await customFetch.get("/");

      return data;
    },
  });

  const { mutate: createTask } = useMutation({
    mutationFn: (todo) => customFetch.post("/", todo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todo"] });
    },
  });

  if (response.isLoading) {
    return <h1>Loading.....</h1>;
  }

  const tasks = response.data.tasks;
  // console.log(tasks);

  // const handleCheckBoxChange = () => {
  //   setIschecked(!isChecked);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const task = Object.fromEntries(formData);
    const { name } = task;
    createTask({ name, completed: isChecked });
    e.currentTarget.reset();
  };

  const completedTodo = tasks.filter((task) => task.completed === true);
  const activeTodo = tasks.filter((task) => task.completed === false);

  return (
    <Wrapper>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="title">
            <h1>TODO</h1>
            <img src={dark ? sun : moon} alt="icon" onClick={toggleDarkMode} />
          </div>
          <div className="create-todo">
            <button>
              {/* <img src={checkBoxImage} alt="check" /> */}
              submit
            </button>

            <div className="input">
              <label htmlFor="name"> Create a new to do..</label>
              <input
                type="text"
                className="input-text"
                id="name"
                name="name"
                required
              />
            </div>
          </div>

          <div className="item-container">
            {filterTodo === "all" &&
              tasks.map((task) => {
                return (
                  <SingleItem
                    key={task._id}
                    id={task._id}
                    name={task.name}
                    completed={task.completed}
                  />
                );
              })}

            {filterTodo === "active" &&
              activeTodo.map((task) => {
                return (
                  <SingleItem
                    key={task._id}
                    id={task._id}
                    name={task.name}
                    completed={task.completed}
                  />
                );
              })}

            {filterTodo === "completed" &&
              completedTodo.map((task) => {
                return (
                  <SingleItem
                    key={task._id}
                    id={task._id}
                    name={task.name}
                    completed={task.completed}
                  />
                );
              })}

            <div className="bottom-description">
              <p className="all">{`${tasks.length} items left`}</p>
              <div className="middle-group-description">
                <span
                  className={filterTodo === "all" ? "active" : ""}
                  onClick={() => setFilterTodo("all")}
                >
                  All
                </span>
                <span
                  className={filterTodo === "active" ? "active" : ""}
                  onClick={() => setFilterTodo("active")}
                >
                  Active
                </span>
                <span
                  className={filterTodo === "completed" ? "active" : ""}
                  onClick={() => setFilterTodo("completed")}
                >
                  Completed
                </span>
              </div>
              <p className="clear-completed">Clear Completed</p>
            </div>

            <div className="whole-middle-group-description">
              <div className="item-wrapper">
                <span
                  className={filterTodo === "all" ? "active" : ""}
                  onClick={() => setFilterTodo("all")}
                >
                  All
                </span>
                <span
                  className={filterTodo === "active" ? "active" : ""}
                  onClick={() => setFilterTodo("active")}
                >
                  Active
                </span>
                <span
                  className={filterTodo === "completed" ? "active" : ""}
                  onClick={() => setFilterTodo("completed")}
                >
                  Completed
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

export default Todo;
