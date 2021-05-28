import React, {useEffect, useState} from "react";
import "./Users.css"
import PhotoUrl from "../../assets/img/87afef76100d0b704ca5b6039468a736.jpg"
import {NavLink} from "react-router-dom";

const Users = (props, {portionSize = 10}) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let [pageNumber, setPageNumber] = useState(1)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize

    useEffect(() => {
        props.onPageChanged(leftPortionPageNumber)
    }, [leftPortionPageNumber])


    return <div>
        <div className="user-pages">
            {
                portionNumber > 1 &&
                <button onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map(p => {
                        return <span className={props.currentPage === p ? "current-page" : 'page'} onClick={() => {
                            props.onPageChanged(p)
                        }}>{p}</span>
                    })
            }
            {
                portionCount > portionNumber &&
                <button onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}>Next</button>
            }
        </div>
        {
            props.users.map((u) => <div key={u.id}>
                <div className="user">
                    <div>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : PhotoUrl} alt="photo"
                                     className="users-photo"/>
                            </NavLink>
                        </div>
                        {props.isAuth && <div>
                            {
                                u.followed
                                    ?
                                    <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.unFollowThunk(u.id)
                                    }}>Unfollow</button>
                                    :
                                    <button disabled={props.followingProgress.some(id => id === u.id)} onClick={() => {
                                        props.followThunk(u.id)
                                    }}>Follow</button>
                            }
                        </div>
                        }
                    </div>
                    <div className="user-info">
                        <div>
                            <div>
                                <span><b>Name:</b> {u.name}</span>
                            </div>
                            {u.status ?
                                <div>
                                    <span><b>Статус:</b> {u.status}</span>
                                </div>
                                :
                                <></>
                            }
                        </div>
                    </div>
                </div>
            </div>)
        }
    </div>
}

export default Users;