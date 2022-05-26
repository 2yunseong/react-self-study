import { useParams } from "react-router-dom";

const data = {
    yunseong:{
        name:"yunseong",
        description: "응애 FE 개발자"
    },
    seohyun:{
        name: "seohyun",
        description: "응애 BE 개발자"
    }
}

const Profile = () => {

    const params = useParams();
    console.dir(params);
    const profile = data[params.username];

    return(
        <div>
            {profile ? (
            <div>
                <h1>{profile.name}의 프로필</h1>
                <div>설명 : {profile.description}</div>
            </div>
            ) : (<p>존재하지 않는 프로필 입니다.</p>)}
        </div>
    );

}



export default Profile;