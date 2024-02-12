import css from './Todo.module.css'
const Todo = ({todo}) => {
    const {id,userId,title,completed}=todo
    return (
        <div className={css.Todo}>
            <div className={css.div}>id: {id}</div>
            <div className={css.div}>userId: {userId}</div>
            <div className={css.div}>title: {title}</div>
            <div className={css.div}>completed: {`${completed}`}</div>

        </div>
    );
};

export default Todo;