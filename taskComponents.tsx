// FILE FOR EDITING AND TESTING COMPONENTS FROM THE TEST
//ans::
//React Memo is one of the technique of avoid unusual rendering in react document.
/*React Memo is a Higher Order Component (HOC) which itself wraps around a component to memoize the rendered output and skips unnecessary renderings.

The component around which it’s used will generate a memoized or an optimal version of it to speed up the render process. As you can see by now, it’s all done to improve the overall stability and rendering performance of your React application.

Also, it allows the component to check the old props against new ones to see if the value has changed or not.

Let’s get to know something more about it in the following points:
*/

import React from "react";
import { Component } from "react";
import { IUser, IProps } from "./interface";

export const FirstComponent =React.memo(({ name, age }: IUser) => {
  console.log("FirstComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

export const SecondComponent =React.memo(({ user: { name, age } }: IProps) => {
  console.log("SecondComponent has been updated");

  return (
    <div>
      my name is {name}, my age is {age}
    </div>
  );
});

export const ThirdComponent=React.memo(class extends Component<IUser> {
  render() {
    console.log("ThirdComponent has been updated");

    return (
      <div>
        my name is {this.props.name}, my age is {this.props.age}
      </div>
    );
  }
})

export const FourthComponent=React.memo(class  extends Component<IProps> {
  render() {
    console.log("FourthComponent has been updated");

    return (
      <div>
        my name is {this.props.user.name}, my age is {this.props.user.age}
      </div>
    );
  }
});
