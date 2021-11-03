import React from "react";
import container from "injector";
import { UserViewModel } from "app/view-model";

const vm: UserViewModel = container.get<UserViewModel>("UserViewModel");

const UserView: React.FC = () => {
    return <div>hello</div>;
};

export default UserView;
