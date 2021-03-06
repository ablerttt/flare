//client/src/constants/styles.js

const styles = (theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "0.3em",
      height: "0.3em",
    },
    "*::-webkit-scrollbar-track": {
      display: "none",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,0.1)",
      borderRadius: "0.4em",
      borderColor: "transparent",
    },
  },
  root: {
    flexGrow: 1,
  },
  addIcons: {
    margin: "auto",
    width: "100%",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  intro: {
    margin: "30px 0",
  },
  button: {
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
  },
  warningButton: {
    backgroundColor: theme.palette.error.main,
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  buttonSampleTerm: {
    margin: theme.spacing(1),
    borderRadius: "2em",
    textTransform: "none",
    backgroundColor: "white",
  },
  listCard: {
    borderRadius: "1em",
    // background: "linear-gradient(45deg, #628bd1 30%, #50b39d 90%)",
    backgroundColor: theme.palette.highlight.main,
    padding: "1em",
    marginBottom: "2em",
    flexGrow: 1,
  },
  listTestCard: {
    borderRadius: "1em",
    backgroundColor: theme.palette.highlight.main,
    padding: "1em",
    marginBottom: "1.5em",
    // flexGrow: 1,
  },
  viewCardOptions: {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    overflow: "auto",
  },
  titleTextField: {
    width: "100%",
  },
  titleResize: {
    fontSize: 24,
  },
  termTextField: {
    width: "40%",
    marginRight: "5%",
  },
  defTextField: {
    width: "40%",
  },
  deleteCardButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    float: "right",
  },
  termCard: {
    borderRadius: "1em",
    backgroundColor: "white",
    padding: "1em 2em",
    marginBottom: "2em",
    // display: "flex",
    // flexDirection: "row",
  },
  titleCard: {
    borderRadius: "1em",
    backgroundColor: theme.palette.primary.cardLight,
    padding: "1em 2em",
    marginBottom: "2em",
    // display: "flex",
    // flexDirection: "row",
  },
  secondaryButton: {
    backgroundColor: theme.palette.secondary.main,
    color: "white",
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
  },
  primaryLightButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      backgroundColor: theme.palette.primary.lightHover,
    },
    "&:disabled": {
      backgroundColor: theme.palette.primary.dark,
      color: "rgba(255, 255, 255, 0.5 )",
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryDarkButton: {
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.darkHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  highlightButton: {
    backgroundColor: theme.palette.highlight.main,
    "&:hover": {
      background: theme.palette.highlight.light,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
  },
  primaryLightLimitedButton: {
    backgroundColor: theme.palette.primary.light,
    "&:hover": {
      background: theme.palette.primary.lightHover,
    },
    "&:disabled": {
      background: theme.palette.primary.lightDisabled,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    width: "6em",
  },
  primaryDarkLimitedButton: {
    backgroundColor: theme.palette.primary.dark,
    "&:hover": {
      background: theme.palette.primary.darkHover,
    },
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "white",
    width: "6em",
  },
  expand: {
    transform: "rotate(0deg)",
    // marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  left: {
    marginLeft: "auto",
  },
  cancelButton: {
    margin: theme.spacing(1),
    borderRadius: "3em",
    textTransform: "none",
    color: "black",
  },
  tabs: {
    textTransform: "none",
    borderRight: `1px solid ${theme.palette.divider}`,
    margin: "auto",
    position: "fixed",
  },
  accountRoot: {
    display: "flex",
    textTransform: "none",
    padding: "auto",
    margin: "auto",
  },
  accountContainer: {
    height: "25em",
    padding: "2em",
    backgroundColor: "rgba(255,255, 255, 0.18)",
    borderRadius: "1em",
  },
  tabPanel: {
    width: "70%",
    marginLeft: "22%",
  },
  practiceLeftFab: {
    position: "absolute",
    padding: "auto 0",
    left: theme.spacing(5),
    bottom: "40%",
    transform: "rotate(-90deg)",
  },
  practiceRightFab: {
    position: "absolute",
    padding: "auto 0",
    right: theme.spacing(5),
    bottom: "40%",
    transform: "rotate(90deg)",
  },
  cardBox: {
    padding: "100px 0",
  },
  practiceCard: {
    position: "relative",
    backgroundColor: theme.palette.highlight.main,
    display: "flex",
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
    height: "100%",
    borderRadius: "3em",
  },
  practiceCardTitle: {
    width: "100%",
    textAlign: "center",
  },
  practiceCardControl: {
    display: "flex",
    flexDirection: "column",
  },
  practiceCardSwitch: {
    margin: "auto",
  },
  practiceCardDescription: {
    width: "60%",
    margin: "auto",
    padding: "auto",
    display: "flex",
    backgroundColor: theme.palette.highlight.dark,
    justifyContent: "center",
    alignContent: "center",
    borderRadius: "2em",
    textAlign: "center",
  },
  logInText: {
    width: "40%",
    color: "white",
    margin: theme.spacing(1),
  },
  clearStyle: {
    margin: "0",
    border: "0",
    padding: "0",
  },
  testCard: {
    padding: "1.5em",
    border: "0",
    margin: "2em 0",
    borderRadius: "1em",
    backgroundColor: theme.palette.highlight.dark,
  },
  submitButton: {
    display: "flex",
    margin: "auto",
    marginBottom: "30px",
    borderRadius: "1em",
    textTransform: "none",
    backgroundColor: theme.palette.highlight.accent,
    "&:hover": {
      background: theme.palette.highlight.accentLighter,
    },
  },
  colortest: {
    // margin: "1em 0",
    margin: theme.spacing(1),
    // padding: "1em",
    color: "black",
    textAlign: "left",
    // width: "100%",
    borderRadius: "1em",
    textTransform: "none",
  },
  correctButton: {
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
    },
    backgroundColor: theme.palette.primary.main,
    color: "white",
  },
  unselectedButton: {
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
      // backgroundColor: "white",
    },
    backgroundColor: theme.palette.secondary.light,
    // backgroundColor: "white",
  },
  incorrectButton: {
    "&:hover": {
      backgroundColor: theme.palette.error.light,
    },
    backgroundColor: theme.palette.error.light,
  },
  homeCardAction: {
    height: "100%",
  },
  homeCard: {
    borderRadius: "1em",
    backgroundColor: theme.palette.highlight.main,
    padding: "1em",
  },
  sortOption: {
    color: theme.palette.text.secondary,
  },
  whiteText: {
    color: "white",
  },
  dialog: {
    backgroundColor: theme.palette.highlight.main,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9,
    marginTop: "30",
  },
});

export default styles;
