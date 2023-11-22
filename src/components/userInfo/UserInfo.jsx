import React from "react";
import Avatar from "react-avatar";
import "./userInfo.scss"

const UserInfo = ({user}) => {

    const today = new Date()
    let age;
    if (user && user.dateOfBirth) {
        age = today.getFullYear() - user.dateOfBirth.substring(0, 4);
        const monthDiff = today.getMonth() - user.dateOfBirth.substring(6, 7);
        if (monthDiff < 0) {
            age--;
        }
    }

    return (
        <>
            {user && (<div className="profile__container">
                <h2>Інформація про користувача</h2>
                <div className="profile__required-info">
                    <Avatar name={user.login} size={80} round={true}></Avatar>

                    <div className="profile__column">
                        {user.login && (<div className="profile__item">
                            <span className="profile__label">Логін:</span>
                            <span className="profile__value">{user.login}</span>
                        </div>)}

                        {user.email && (<div className="profile__item">
                            <span className="profile__label">Електронна пошта:</span>
                            <span className="profile__value">{user.email}</span>
                        </div>)}

                        {user.discordNickname && (<div className="profile__item">
                            <span className="profile__label">Нікнейм в Діскорд:</span>
                            <span className="profile__value">{user.discordNickname}</span>
                        </div>)}
                    </div>
                </div>

                <div className="profile__additional-info">
                    {user.sex && (<div className="profile__item">
                        <span className="profile__label">Стать:</span>
                        <span className="profile__value">{user.sex}</span>
                    </div>)}

                    {user.favouriteGenre && (<div className="profile__item">
                        <span className="profile__label">Улюблений жанр:</span>
                        <span className="profile__value">{user.favouriteGenre}</span>
                    </div>)}

                    {user.dateOfBirth && (<div className="profile__item">
                        <span className="profile__label">Вік:</span>
                        <span className="profile__value">{age}</span>
                    </div>)}
                </div>

                {user.additionalInfo && (<div className="profile__item">
                    <span className="profile__label">Додаткова інформація про користувача:</span>
                    <span className="profile__value">{user.additionalInfo}</span>
                </div>)}
            </div>)}
        </>
    )
}

export default UserInfo