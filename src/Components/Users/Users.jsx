import s from './Users.module.css'

const Users = (props) => {

        if (props.users.length === 0) {
            props.setUsers([
                {id: 1, photoUrl: 'https://zvezda.today/contents/models/435/s1_stilov-sergey-image.jpg',
                    followed: false, fullName: 'Stilov', status: 'I am a boss', location: {city: 'Minsk', country: 'Belarus'}},
                {id: 2, photoUrl: 'https://i.pinimg.com/originals/81/63/65/816365afcdd9121bb84161cd76e080cd.jpg',
                    followed: true, fullName: 'Matrang', status: 'I am a boss too', location: {city: 'Moscow', country: 'Russia'}},
                {id: 3, photoUrl: 'https://n1s2.starhit.ru/11/9c/78/119c787db01107e05527ff1c49c742c4/480x497_0_a6da3f9d8726f20c1b091f1463ac39a6@480x497_0xac120003_8451764021597143371.jpg',
                    followed: false, fullName: 'Гоар', status: 'I am a boss too', location: {city: 'Mogilev', country: 'Belarus'}}
                ]
            )
        }

    return (
        <div>
            {
                props.users.map( u => <div key={u.id}>
                    <span>
                        <div>
                            <img src={u.photoUrl} className={s.userPhoto}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={ () => {props.follow(u.id)}}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users;