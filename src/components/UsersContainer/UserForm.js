import {useForm} from "react-hook-form";

import {usersService} from "../../service/usersService";

const UserForm = ({setUsers}) => {
    const {reset, handleSubmit,register} =useForm()
    const create= (date) => {
        usersService.create(date).then(({data})=>setUsers(prev=>[...prev,data]))
    reset()
    };
    return (
        <div>
            <form onSubmit={handleSubmit(create)}>
                <input type='text' placeholder={'name'} {...register('name')}/>
                <input type='text' placeholder={'username'} {...register('username')}/>
                <input type='text' placeholder={'email'} {...register('email')}/>

                <button>save</button>
            </form>
        </div>
    );
};

export default UserForm;