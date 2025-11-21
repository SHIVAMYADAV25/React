  ## useRecoilStateLoadable

  # this will return two value getter(todo) and setter(setTodo)

  # in Todo it will have state which shows the condition or state of request

  # eg ( loading / hasValue / hasError ) at each end point we can render data as needed

  # to load data there is other value in todo that is content
  - only need to add todo.contents.title instead of todo.title

  ## useRecoilValueLoadable

  - only difference is that there is no setter in this only getter
  - and everything is same gets getter can access state and content in same way
