import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary';
import firebaseService from './firebaseService';
import faces from './img/faces.png';
import logo from './img/logo.png';
import twitter from './img/twitter.jpg';
import facebook from './img/facebook.png';
import linkedIn from './img/linkedIn.png';
import google  from './img/google.png';
import bgHeader from './img/bg-header.png';
import Footer from './Footer';
import './App.css';
import firebase from "firebase/app";
import Canvas from './Canvas';
import ModalAnswers from './ModalAnswers';
import Gauge from './Gauge';
import QuestionnaireBrute from './QuestionnaireBrute';
import response from './response';
import Resultat from './Resultat';

import {Motion, spring} from 'react-motion';
import {
  Link,withRouter,useLocation
} from "react-router-dom";
import TextKey from './text/TextKey';
import MindButton from './components/MindButton';

import {TransitionGroup,CSSTransition}  from 'react-transition-group';
var  questionsSuivante = 0;
var nextQuestion=[];
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
    index = Math.floor(Math.random() * ctr);
    ctr--;
    temp = arra1[ctr];
    arra1[ctr] = arra1[index];
    arra1[index] = temp;
  }
  return arra1;
}
const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 

const Questionnaire = shuffle(QuestionnaireBrute);
var debut = 1;
var  fin = 5;
const numberCircle ={
  display:'flex',
  flex:1,
  color: '#666',
  'textAlign': 'center',
  alignSelf:'center',
  alignItems: 'center',
  flexDirection:'column',
  cursor: 'pointer',
};

class Description extends Component {
  constructor (props){
    props.func("description");
    super(props);
    this.state = {
      selected: "",
      answers: [],
      site: '',
      address: '',
      debut: 1,
      fin:5,
      somme: debut + fin,
      resultat:{},
      message:'',
      email:'',
      password:'',
      showExam:false,
      user:null,
      arrayScore: null,
      modalOpen:false,
      modalIsOpen:false,
      progressBar:0,
      progress:0,
      betterthan:10,
      betterthan1:11,
      betterthan2:13,
      betterthan3:17,
      betterthan4:19,
      inProp:false,
      hadTakenTest:false
    };
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.setFirstName = this.setFirstName.bind(this);
    this.setLastName =  this.setLastName.bind(this);
    this.timeout = null;
}

componentDidMount() {
  this.authSubscription = firebaseService.auth().onAuthStateChanged((user) => {
    const userId = user?.uid;
    firebaseService.database().ref(`scores/category/1/${userId}`).once("value", snapshot => {
    if (snapshot.exists()){
       console.log("exists!");
      
      this.getValue(1,'betterthan');
      this.getValue(2,'betterthan1');
      this.getValue(3,'betterthan2');
      this.getValue(4,'betterthan3');
      this.getValue(5,'betterthan4');

      this.setState({hadTakenTest:true});
    }
    else console.log("nexsite pas",userId)
    });

    this.setState({
      loading: false,
      user,
    });
  });
}

componentWillUnmount() {
  this.authSubscription();
  if (this.timeout) {
    clearTimeout(this.timeout);
  }
}

setPassword(event) {
  this.setState({password: event.target.value});
}

setFirstName(event) {
  this.setState({firstName: event.target.value});
}

setLastName(event) {
  this.setState({lastName: event.target.value});
}

setEmail (event) {
  console.log('email', event.target.value);
  this.setState({email: event.target.value});
}

submitAnswers = () =>{
  const {answers} = this.state;
  const userId = firebaseService.auth().currentUser.uid;
  var ref = firebaseService.database().ref('users/' + userId + '/answers');
  ref.once('value', (snapshot) =>{
    console.log(snapshot.val());
    this.setState({answers:snapshot.val()})
  });
};

getValue = (cate,betterthan) => {
  const userId = firebaseService.auth().currentUser.uid;
  var ref = firebaseService.database().ref('scores/category/' + cate);
  ref.once('value', (snapshot) =>{
    const obj = snapshot.val();
    let donne = Object.values(obj);
    donne = donne.sort((a, b) =>{
      return a - b;
    });
    var percentile;
    const rslt = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        var val = {[key] :obj[key]};
        rslt.push(val);
      }
    }
    let sortedCategory = rslt.map (x => {
      let vul = {you:x[Object.keys(x)]};
      if (Object.keys(x)[0] === userId)  {  
        percentile = x[Object.keys(x)];
        return  vul; 
      }
      return x;
    }).sort ( (a,b) =>{
      return a[Object.keys(a)]-b[Object.keys(b)]
    });

    let findees = donne.lastIndexOf(percentile);
    //console.log("index of ",findees);
    let percc = Math.floor(findees +1) *100/donne.length;
    this.setState({[betterthan]:percc});
   // console.log("percc!!!!!!!",percc);
    //end percentile 
    let jsonObj ={} ;
    sortedCategory.forEach( x => jsonObj[Object.keys(x)] = x[Object.keys(x)] )
    this.setState({arrayScore: jsonObj})
  });
  return [betterthan];
}

arrayOfAnswers = () =>{
  this.setState({modalOpen:true});
  this. getValue(1,'betterthan');
  this. getValue(2,'betterthan1');
  this. getValue(3,'betterthan2');
  this. getValue(4,'betterthan3');
  this. getValue(5,'betterthan4');
};

openModal =() =>{
  this.setState({modalIsOpen:true});
}
  
closeModal=()=>{
  this.setState({modalIsOpen:false});
}

testGetValue = () =>{
  return this.state.betterthan4;
}

render() {
    
const onSiteChanged = (e) => {
  this.setState({
    site: e.currentTarget.value
  });
}

const onAddressChanged =(e) => {
  this.setState({
    address: e.currentTarget.value
  });
}

const handleSubmit =(event) => {
  firebaseService.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((user) => {
    this.setState({message:'User Account created successfully', showExam:true});
    })
    .then(() =>{
      firebaseService.auth().onAuthStateChanged(user => {
        if (user) {
          console.log(this.state.lastName);
          user.updateProfile({ // <-- Update Method here
            displayName: this.state.firstName + " " + this.state.lastName,
          }).then(() =>{
            console.log("click the link in your email to verify your account");
          }, error => {
            console.log("update failed",error);
          });     
        }
      });
    })
    .catch((error) =>{
    console.log(error);
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorMessage === "The email address is already in use by another account."){
          this.setState({message: "Email has already been created"});
          firebaseService.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(()  =>{
            firebaseService.auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password);
          }) 
        .then(() => this.setState({message:'Sign In Successful because account has been created alreay',showExam:true}))
        .catch( error => this.setState({message: " " + error.message}))
      }
      else this.setState({message: " " + errorMessage});
    });
  
    event.preventDefault();
  }

const handleClick = (question,elmnt) => {
  const {debut,fin,progressBar} =  this.state;

  if (!nextQuestion.includes(question)) {
    nextQuestion.push(question);
    if (progressBar <100) this.setState({progressBar: progressBar +2});
  }
  let Questions = Questionnaire.slice(debut-1,fin);
  try {
    let answers = [...this.state.answers];
   // console.log(answers);
    let choosen = Questionnaire.find( x => x.key === question);
    let rslt = {
      keyresponse: elmnt.key,
      number: question,
      question: choosen.val, //=> Questionnaire devrait filtrer ou find ddans le questionnaire celui qui a la cle quon recherche et non prendre simplement celui a cette position du tableau...
      response: response[elmnt.key-1].valeur,
      category: choosen.category,
      score: choosen.category>0 ? response[elmnt.key-1].key:response[elmnt.key-1].quote,
    };
    //console.log(rslt);
    answers[question-1] = rslt;
    this.setState({ selected: elmnt.key, answers });  
   // console.log("Fin",this.state.fin);
  }catch (error) {
    this.setState({ error });
  }
}
const qcm = (question) => {
  let answers = [...this.state.answers];
  //console.log("????????",question);
    return response.map((elmnt) => (
      <td key={elmnt.key} style={{ paddingRight: widthScreen(40) }}>
        <button 
          style={
            question === 50 ? (answers[question])  && answers[question].keyresponse === elmnt.key ? styles['radioButtonClicked' + elmnt.key] : styles['radioButton' + elmnt.key]:
            (answers[question-1])  && answers[question-1].keyresponse === elmnt.key ? styles['radioButtonClicked' + elmnt.key] : styles['radioButton' + elmnt.key]
          } 
          onClick={()=> {
            console.log('numero clicked',question === 50);
            handleClick(question,elmnt)}}
        />
      </td>
    ));
};

const nextPage = () =>{
  const {debut,fin} = this.state;
    if (nextQuestion.length ===5 && fin<100){
      this.setState({debut:debut+5,fin:fin+5,inProp:true});
      nextQuestion=[];
    }else {
      this.setState({inProp:false})
  }
}

var il = 0;
var decompte =0;
var montrer = false;

const move =() =>{
  if (il == 0) {
    il = 1;
    const  frame = () =>{
      if (width >= 100) {
       // this.setState({showResult: true});
        return ;
      } else {
        width++;
        decompte = width
        //console.log(decompte);
        this.setState({progress:width});
      }
    }
    var width = 1;
    var id = setInterval(frame, 50);
  }
}

const submit =() => {
  //e.preventDefault()
  const userId = firebaseService.auth().currentUser.uid;
  const {answers} = this.state;
  let sorted =[];
  let sommation = answers.map( element =>   { 
    let filtre = answers.filter( x => Math.abs(x.category) === element.category);
    if ((filtre.length !== 0) &&  !sorted.includes(element.category)) {      
      let score = 0;
      score =  filtre.map ( val => Number(val.score)).reduce ( (acc,curr) => acc + curr) ;
      sorted.push(element.category);
      return { 
          [element.category]: filtre,
          score:score
      }
    }
  })
  let rsultFinal = sommation.filter( x => x !== undefined);
  rsultFinal.forEach( val =>  {
    firebaseService.database().ref('scores/' + 'category' + '/' + [Object.keys(val)[0]] + '/' + userId).set(
      val.score
    );
  });
  let resp ={
    answers:answers.filter( val => val !==undefined),
    groupAnswer: rsultFinal
  };
 // console.log(resp);
  firebaseService.database().ref('users/' + userId + '/').set(
    resp
  );
  this.getValue(1,'betterthan');
  this.getValue(2,'betterthan1');
  this.getValue(3,'betterthan2');
  this.getValue(4,'betterthan3');
  this.getValue(5,'betterthan4');
  this.setState({showResult:true});
  move();
  setTimeout(() => {
    this.setState({hadTakenTest:true,showResult:false})
  },5000);
}

const {showResult,progress} = this.state;

if (showResult) return (
    <div style={{alignItems:'center',justifyContent:'center',alignSelf:'center',paddingLeft:50}}>
      <Gauge fontSize="34" fontColor='#86207C' level ={progress} title="Score Calculation" color="orange"/>
    </div>
);
       

/*const displayName = firebaseService.auth().currentUser?.displayName;

 this.state.betterthan,
        this.state.betterthan1,
        this.state.betterthan2,
        this.state.betterthan3,
        this.state.betterthan4,

console.log(displayName);*/
if (this.state.hadTakenTest) return  <Resultat resultat1level={this.state.betterthan} 
                                               resultat2level={this.state.betterthan1} 
                                               resultat3level={this.state.betterthan2}
                                               resultat4level={this.state.betterthan3} 
                                               resultat5level={this.state.betterthan4}
                                      />;
    //je dois revoir le background image et mettre le background-image : cover et le background-position center center 
 return (
  <ErrorBoundary>
    {!this.state.user ? <div style={{display:'flex',flexDirection:'column'}}> 
      <div style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column',flex:1,position:'relative'}}>
        <div 
          style={{backgroundImage: `url(${bgHeader})`,
            height:470,justifyContent:'center',display:'flex',flexDirection:'column', 
            WebkitBackgroundSize:'auto'
          }}
        >
          <div  id="takeTest">
            <label  style={{fontSize:46.5,fontFamily:'Open Sans Light',paddingBottom:29}}>{TextKey.testPage.takeTest} </label>
          </div>
        <label id="paragraph" style={{fontFamily:'Open Sans Light',fontSize:20}} >{TextKey.testPage.paragraph}</label>
        </div>
        <label style={{color:'red',alignSelf:'center'}}> 
          {this.state.message}
        </label>
      </div>
      
      
        <div  style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column',flex:1,flexGrow:1, flexShrink:0,WebkitFlex:0}} >
           <label style={{ minWidth: 'auto' ,display:'flex',alignSelf:'center',padding:10,fontFamily:'Open Sans Regular',fontSize:27.5,flex:1}}>{TextKey.testPage.invitation}</label>
          
          
          <form  style={numberCircle} onSubmit={handleSubmit}>
            <input required type="text" value={this.state.firstName} onChange={this.setFirstName} placeholderStyle={{fontSize:22,fontFamily:'Open Sans Regular',paddingLeft:25}} style={styles.inputStyle} placeholder="FIRST NAME" />
            <input required type="text" value={this.state.lastName} onChange={this.setLastName} style={styles.inputStyle} placeholder="LAST NAME" />
            <input required type="email" value={this.state.email} onChange={this.setEmail} style={styles.inputStyle}placeholder="EMAIL ADDRESS" />
            <input required type="password"  value={this.state.password} onChange={this.setPassword}  style={styles.inputStyle} placeholder="PASSWORD"/>
            <input type="submit"   id="submit" value="Begin The Exam &rarr;"  
              style={styles.submit}
          />
          </form>
        </div>
    </div> : null}
      
  {this.state.user ? 
    <>
      <div style={{justifyContent:'center'}}>
        <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:heightScreen(80)}}>
          <div style={{backgroundColor:'#DCDCDC',borderRadius:5,marginLeft:5,marginRight:widthScreen(39),alignItems:'center',alignSelf:'center',width:'30%', borderTop : "thin solid darkgray",}}>
            <div style={{height:31,width:this.state.progressBar +"%",backgroundColor:'#86207C',borderRadius:5,display:'flex',flex:1}}/>
          </div>
          <label style={{fontFamily:'Open Sans Bold', fontSize:24,color:'#86207C'}}> {this.state.progressBar +"%"}</label>
        </div>
        <div 
          style={{
            display:'flex',
            'flexDirection': "column",
          }}
        >
          {Questionnaire.slice(this.state.debut-1,this.state.fin).map((elemnt, key) => (
            <div
              key={elemnt.key}
              style={styles.questionnaire}
            >
              <label style={styles.button,{display: 'flex',fontFamily:'Open Sans Regular',paddingBottom:heightScreen(30),paddingTop:heightScreen(80),fontSize:18}}>
                {elemnt.val}
              </label>
              <div  id="questionnaire" style={{justifyContent:'space-around',display:'flex'}}>
                <label  id="disagreeBig" style={{paddingRight:41}}>{TextKey.testPage.disagree}</label>
                <div style={{justifyContent:'space-around',alignItems:'center',display:'flex',flexDirection:'row'}}>
                  {   
                    qcm(elemnt.key)
                  }
                  </div>
                      <div style={{display:'flex',width:'100%'}}> 
                      <label id="disagreeSmall">{TextKey.testPage.disagree}</label>
                  <label style={{display:'flex',color:'#41ac97',fontFamily:'Open Sans Bold',fontWeight:'bold',textAlign:'flex-end'}}>{TextKey.testPage.agree}</label>

                  </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        { this.state.progressBar >=100?
        <MindButton paddingHorizontal={30} func={submit} textSize={40} text="Submit Answers" marginTop={50} marginBottom={112}/>
        :null}
    </div> 
  </> : null } 
    {nextQuestion.length ===5 && this.state.progressBar <100 ?
       <div style={{alignItems:'center',justifyContent:'center',alignSelf:'center',display:'flex'}}>
       <MindButton paddingHorizontal={58} func={nextPage} textSize={30} text="Next &rarr;" marginTop={50} marginBottom={112}/>
       </div>: null
    }  
    
    <Footer   text={true}/>
    


  </ErrorBoundary>
    );
  }
}
const styles = {
  inputStyle:{
    width:'35em',
    paddingTop:24,
    paddingBottom:20 ,
    borderColor:'transparent',
    borderRadius:'0.5em',
    marginBottom:22,
    flexGrow:1
  },

  butonSubmit:{
    display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#F49608',
    'borderRadius':20,
    padding: 7,
    marginTop:5,
    marginBottom:15,
    borderColor:'transparent',
    fontFamily:'Open Sans Light',
    fontSize:21,
  },
  submit:{
    display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#F49608',
    'borderRadius':50,
    fontSize:22,
    fontFamily:'Open Sans Light',
    padding: 20,
    marginTop:31,
    marginBottom:60,
    borderColor:'transparent'
  },
  questionnaire:{
    'justifyContent': "space-between",
     paddingBottom: heightScreen(40),
     display:'flex',
     'flexDirection':'column',
     alignItems:'center',
     borderBottom : "thin solid #DCDCDC",
    // width: '30%',
     alignSelf:'center'
   },
  buton:{
    display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#ff8c00',//'#F49608',
    'borderRadius':20,
    borderColor:'transparent',
    //padding: 10,
    //margin:2
  },
  button: {
    'alignItems': "center",
    'backgroundColor': "#DDDDDD",
     padding: 10,
    'marginHorizontal': 1
  },
  tbody:{
      'justifyContent': "center",
   // 'backgroundColor': "blue",
    width:'50%'
     //padding: 10,
    //'marginHorizontal': 1
  },
  radioButton: {
    width: '20px',
    height: '20px',
    'border-radius': '50%',
},
radioButtonClicked: {
  width: '20px',
  height: '20px',
  'border-radius': '50%',
  backgroundColor:'red',
  borderColor: 'pink',
},
radioButton1: {
  width: 68,
  height: 68,
  'border-radius': '50%',
  borderColor:'#86207C'
},
radioButtonClicked1: {
width: 68,
height: 68,
'border-radius': '50%',
backgroundColor: '#86207C',
},
radioButton2: {
  width: 50,
  height: 50,
  'border-radius': '50%',
  borderColor:'#86207C'
},
radioButtonClicked2: {
width: 50,
height: 50,
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton3: {
  width: 42,
  height: 42,
  'border-radius': '50%',
  borderColor:'#86207C'
},
radioButtonClicked3: {
width: 42,
height: 42,
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton4: {
  width: 34,
  height: 34,
  'border-radius': '50%',
},
radioButtonClicked4: {
width: 34,
height: 34,
'border-radius': '50%',
backgroundColor:'gray',
},
radioButton5: {
  width: 42,
  height: 42,
  'border-radius': '50%',
  borderColor:'#41ac97',
},
radioButtonClicked5: {
width: 42,
height:42,
'border-radius': '50%',
backgroundColor:'#41ac97',
},
radioButton6: {
  width: 52.25,
  height: 52.25,
  'border-radius': '50%',
  borderColor: '#41ac97',
},
radioButtonClicked6: {
width: 52.25,
height: 52.25,
'border-radius': '50%',
backgroundColor:'#41ac97',
},
radioButton7: {
  width: 68,
  height: 68,
  'border-radius': '50%',
  borderColor: '#41ac97',
},
radioButtonClicked7: {
width: 68,
height: 68,
'border-radius': '50%',
backgroundColor:'#41ac97',
}
};

export default withRouter(Description);
