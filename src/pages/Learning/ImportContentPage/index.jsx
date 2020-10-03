import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button, FormGroup, Input } from "reactstrap";
import QuestionApi from "api/QuestionApi";
import initData from "./initData";
import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import CommentIcon from "@material-ui/icons/Comment";
import QuizPage from "../QuizPage/index";
import { Collapse } from "antd";
import { DeploymentUnitOutlined } from "@ant-design/icons";
import { useStyles } from "./ImportContent.style";
import { useMediaQuery } from "react-responsive";
const { Panel } = Collapse;

function ImportContentPage(props) {
  const [paragraph, setParagraph] = useState("");
  const [question, setQuestion] = useState(null);
  const [conllapseKey, setConllapseKey] = useState("1");
  const [checked, setChecked] = React.useState([0]);
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 960px)" });

  function callback(key) {
    if (key.length < 2) {
      setConllapseKey(["0"]);
    }
    if (key.length === 2) {
      setConllapseKey(["1"]);
    }
    console.log(key);
  }

  const handleInputParagraph = (event) => {
    setParagraph(event.target.value);
    if (event.key === "Enter") {
      handleGenerate();
    }
  };

  const handleGenerate = async () => {
    // const response = await QuestionApi.generateQuestions(paragraph);

    const response = [...initData];
    console.log("response:", response);

    setQuestion(response);
    setConllapseKey("0");
  };

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const classes = useStyles();

  function NewWordContent(){
    return (
      <Grid item xs={12} md={4}>
          <Paper className={(classes.paper, classes.flexColumn)}>
            <div className="d-flex align-items-center p-1">
              <Checkbox />
              <ListItemText id="1" primary="Select all" />
              {/* <h4>New words list</h4> */}
              <Button
                outline
                color="primary"
                size="sm"
                className="ml-auto mr-2"
              >
                <div className="d-flex align-items-center">
                  <DeploymentUnitOutlined />
                  &nbsp; Learn
                </div>
              </Button>
            </div>
            <div>
              <hr />
            </div>
            <List className={classes.listNewWord}>
              {[0, 1, 2, 3].map((value) => {
                const labelId = `checkbox-list-label-${value}`;

                return (
                  <ListItem
                    key={value}
                    role={undefined}
                    dense
                    button
                    onClick={handleToggle(value)}
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(value) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      id={labelId}
                      primary={`Line item ${value + 1}`}
                    />
                    <ListItemSecondaryAction>
                      <IconButton edge="end" aria-label="comments">
                        <CommentIcon className={classes.outlineNone} />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                );
              })}
            </List>
          </Paper>
        </Grid>
    );
  }


  function NewWordList() {
    if (!isTabletOrMobile) {
      return (
        <NewWordContent/>
      );
    } else return (
      <Collapse className={classes.listNewWordMobileSize}>
        <Panel header="New Word List" >
        <NewWordContent/>
        </Panel>
      </Collapse>
    );
  }



  return (
    <div className={classes.root}>
      <Grid container item xs={12} md={12} lg={9} spacing={3}>
        <NewWordList/>
        <Grid item xs={12} md={8}>
          <Collapse
            activeKey={conllapseKey}
            destroyInactivePanel={true}
            onChange={callback}
          >
            <Panel header="Input paragaph to learn" key="1">
              <div>
                <FormGroup>
                  <Input
                    className={classes.areaMinHeight}
                    type="textarea"
                    defaultValue={paragraph}
                    name="text"
                    id="exampleText"
                    onKeyUp={handleInputParagraph}
                  />
                </FormGroup>
                <div className="d-flex">
                  <Button
                    outline
                    color="danger"
                    size="sm"
                    className="ml-auto"
                    onClick={() => handleGenerate()}
                  >
                    Make Quiz &darr;
                  </Button>
                </div>
              </div>
            </Panel>
          </Collapse>

          {question && <QuizPage question={question} />}
        </Grid>
      </Grid>
    </div>
  );
}

export default ImportContentPage;
