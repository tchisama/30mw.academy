import React, { PureComponent } from "react";

interface TypeWriterProps {
  data: string[];
}

interface TypeWriterState {
  text: string;
}

class TypeWriter extends PureComponent<TypeWriterProps, TypeWriterState> {
  private unmounted: boolean = false;
  private loopNum: number = 0;
  private period: number = 1000;
  private isDeleting: boolean = false;

  constructor(props: TypeWriterProps) {
    super(props);

    this.state = {
      text: ""
    };
  }

  componentDidMount() {
    this.unmounted = false;
    this.loopNum = 0;
    this.period = 2000;
    this.isDeleting = false;
    this.tick();
  }

  componentWillUnmount() {
    this.unmounted = true;
  }

  private tick() {
    if (this.unmounted) {
      return;
    }

    const { data: toRotate } = this.props;
    const i = this.loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    let newText = "";
    if (this.isDeleting) {
      newText = fullTxt.substring(0, this.state.text.length - 1);
    } else {
      newText = fullTxt.substring(0, this.state.text.length + 1);
    }

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && newText === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && newText === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    this.setState({ text: newText });

    setTimeout(() => {
      this.tick();
    }, delta);
  }

  render() {
    return <span className="typewriter">{this.state.text}</span>;
  }
}

export default TypeWriter;
