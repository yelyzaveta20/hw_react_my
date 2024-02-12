import css from './Album.module.css'
const Album = ({album}) => {
    const {id,userId,title}=album
    return (
        <div className={css.Album}>
        <div className={css.div}>id: {id}</div>
        <div className={css.div}>userId: {userId}</div>
        <div className={css.div}>title: {title}</div>

        </div>
    );
};

export default Album;