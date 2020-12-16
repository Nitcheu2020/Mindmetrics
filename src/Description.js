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
//CATEGORY REMAINS THE SAME ON ABSOLUTE VALUE MEANNIG POSITIVE AND NEGATIVE BELONG TO THE SAME SET....
import Canvas from './Canvas';
import ModalAnswers from './ModalAnswers';
import Gauge from './Gauge';
import QuestionnaireBrute from './QuestionnaireBrute';
import response from './response';
import {Motion, spring} from 'react-motion';
import {
  Link,withRouter,useLocation
} from "react-router-dom";

import {TransitionGroup,CSSTransition}  from 'react-transition-group';
var  questionsSuivante = 0;
var nextQuestion=[];
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;

// While there are elements in the array
  while (ctr > 0) {
// Pick a random index
      index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
      ctr--;
// And swap the last element with it
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}

//const location = useLocation();

const widthScreen = (taille) =>  {
  return taille * 100/2063 + 'vw';
}
const heightScreen = (taille) =>  {
  return taille * 100/2610 + 'vw';
} 


const Questionnaire = shuffle(QuestionnaireBrute);

var debut = 1;
var  fin = 5;
//var Questions = Questionnaire.slice(debut-1,fin);
const numberCircle ={
  display:'flex',
  flex:1,
 width: 36,
  height: 36,
 // padding: 8,
 // background: '#fff',
  color: '#666',
  'textAlign': 'center',
  alignSelf:'center',
  alignItems: 'center',
  flexDirection:'column'
};
class Description extends Component {
  constructor (props){
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
        //PASSER LA FONCTION DE DISPLAY EN PARAMETRE AUSSI 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
    this.timeout = null;
}

componentDidMount() {
	this.authSubscription = firebaseService.auth().onAuthStateChanged((user) => {
    this.setState({
      loading: false,
      user,
    });
  });

  /*const {answers} = this.state;
  const userId = firebaseService.auth().currentUser.uid;
  var ref = firebaseService.database().ref('users/' + userId + '/answers');
  ref.once('value', (snapshot) =>{
    console.log(snapshot.val());
    this.setState({answers:snapshot.val()})
  });*/
  
}

componentWillUnmount() {
  this.authSubscription();
  if (this.timeout) {
    clearTimeout(this.timeout);
  }

}

setPassword(event) {
  console.log('password', event.target.value);
  this.setState({password: event.target.value});
}
setEmail (event) {
  console.log('email', event.target.value);
  this.setState({email: event.target.value});
}

handleSubmit(event) {
  firebaseService.auth()
  .createUserWithEmailAndPassword(this.state.email, this.state.password)
 /* firebaseService.auth().setPersistence(firebaseService.auth.Auth.Persistence.SESSION)
  .then(() => {
     firebaseService.auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password);
  })*/
  .then(() => this.setState({message:'User Account created successfully', showExam:true}))
  .catch((error) =>{
  console.log(error);
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorMessage === "The email address is already in use by another account.")
    {this.setState({message: "Email has already been created"});

   // firebaseService.auth()
    //  .signInWithEmailAndPassword(this.state.email, this.state.password) 
    //firebase.auth.Auth.Persistence.SESSION
     firebaseService.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(()  =>{
     firebaseService.auth()
    .signInWithEmailAndPassword(this.state.email, this.state.password);
  }) 
    .then(() => this.setState({message:'Sign In Successful because account has been created alreay',showExam:true}))
    .catch( error => this.setState({message: "???????????????????????" + error.message}))
    }
    else this.setState({message: "!!!!!!!!!!!!!!!!!!!!!!!!!" + errorMessage});
  });
  event.preventDefault();
}

  submitAnswerss (){
    
   
  };

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
          
        return  vul; }
        return x;
      }).sort ( (a,b) =>{
        return a[Object.keys(a)]-b[Object.keys(b)]
      });

      //percentile 

      //when logging out i should reset the score.... 
        
      let findees =   donne.lastIndexOf(percentile);
      console.log("index of ",findees);
      let percc = Math.floor(findees +1) *100/donne.length;
      this.setState({[betterthan]:percc});
      console.log("percc!!!!!!!",percc);
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

    const handleClick = (question,elmnt) => {
      const {debut,fin,progressBar} =  this.state;
      //set the next question
      if (!nextQuestion.includes(question)) {
        nextQuestion.push(question);
        if (progressBar <100) this.setState({progressBar: progressBar +2});
      }
      let Questions = Questionnaire.slice(debut-1,fin);
      //etant donnee que je slice par groupe de 5 les index iront tjrs jusk 4 et par consequent je devrais prendre la cle de la question.... 
        try {
            let answers = [...this.state.answers];
            let rslt = {
                keyresponse: elmnt.key,
               // question: Questions[question].val,
                number: question,
                question: Questionnaire[question].val,
                response: response[elmnt.key-1].valeur,
                //category: Questions[question].category,
                category: Questionnaire[question].category,
                //score: Questions[question].category>0 ? response[elmnt.key-1].key:response[elmnt.key-1].quote,
                score: Questionnaire[question].category>0 ? response[elmnt.key-1].key:response[elmnt.key-1].quote,
            };
            answers[question-1] = rslt;
           // answers[Questions[question].key-1] = rslt;
           //answers[Questions[question].key] = rslt;
            this.setState({ selected: elmnt.key, answers });  
             console.log("Fin",this.state.fin);
            //new pages..... 
            setTimeout(() =>{
              const {debut,fin} = this.state;
                //Move to the next page *****
            if (nextQuestion.length ===5 && fin<100)
            {
              this.setState({debut:debut+5,fin:fin+5,inProp:true});
              nextQuestion=[];
            }else {
              this.setState({inProp:false})
            }
           }, 2000);
             

        } catch (error) {
        this.setState({ error });
        }
    }
    const qcm = (question) => {
        let answers = [...this.state.answers];
        if (question === 50) console.log("QUESTION sdfdsfdfs 50 ");
      return response.map((elmnt) => (
        <td key={elmnt.key} style={{ paddingRight: widthScreen(40) }}>
          <button style={
            question === 50 ? (answers[question])  && answers[question].keyresponse === elmnt.key ? styles['radioButtonClicked' + elmnt.key] : styles['radioButton' + elmnt.key]:
            (answers[question-1])  && answers[question-1].keyresponse === elmnt.key ? styles['radioButtonClicked' + elmnt.key] : styles['radioButton' + elmnt.key]
          } 
                  onClick={()=> {
                     handleClick(question,elmnt)}}
          />
        </td>
      ));
    };

    const pourcentage = () => {
      let donne = [11, 10, 12, 23, 17, 16, 17, 14, 24, 22, 14]; 
      donne = donne.sort((a, b) =>{
        return a - b;
      });
      let findees =   donne.lastIndexOf(23);
      console.log("index of ",findees);
      let percc = Math.floor(findees +1) *100/donne.length;

    }

    const logOut = () => {
      firebase.auth().signOut().then(function() {
      // Sign-out successful.
      }).catch(function(error) {
      // An error happened.
      });
    }
     
    var il = 0;
    var decompte =0;
    var montrer = false;

    const move =() =>{
      if (il == 0) {
        il = 1;
       // var elem = document.getElementById("myBar");
       // function
       const  frame = () =>{
        if (width >= 100) {
          this.setState({showResult: true});
          return ;
         // this.setState({showResult:true});
        //  clearInterval(id);
        //  il = 0;
        } else {
          width++;
          decompte = width
          console.log(decompte);
          this.setState({progress:width});
         // elem.style.width = width + "%";
        }
      }

        var width = 1;
        var id = setInterval(frame, 50);
       
      }
    }
    const {showResult,progress} = this.state;
    if (showResult) return (
      <div  style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center', margin:'25%'
          }}>
             <Gauge fontSize="34" fontColor='#86207C' level ={progress} title="Score Calculation" color="orange"/>
      </div>
    );
          //style={{ alignItems:'center',width:'100%'}}
    return (
      <ErrorBoundary>
        <div style={{justifyContent:'center',display:'flex',alignItems:'center',backgroundColor:'#D3D3D3',}}>
          {this.state.user? 
          <>
          <Link to="/" style={{ textDecoration: 'none' }}>
           <button style={{backgroundColor:'transparent',borderColor:'transparent'}} onClick={() => logOut()}>
           <img  style={{padding:5,}} src={logo} alt="logo"/>
           </button>
          </Link>
          </>
          :null}
        </div>

          {!this.state.user ? <div style={{display:'flex',flexDirection:'column'}}> 
          <div style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column',flex:1,position:'relative'}}>
            <div 
              style={{backgroundImage: `url(${bgHeader})`,
               height:470,justifyContent:'center',display:'flex',flexDirection:'column',
              }}
            >
            <div>
              <label style={{marginLeft:widthScreen(360),fontSize:widthScreen(46.5),fontFamily:'Open Sans Light',paddingBottom:heightScreen(29)}}> Take The Personality Test</label>
            </div>
            <label style={{width:widthScreen(482.63),marginLeft:widthScreen(360),fontFamily:'Open Sans Light',fontSize:widthScreen(20)}} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </label>
          </div>

            <label style={{color:'red',alignSelf:'center'}}> {
              this.state.message
            }</label>
            
          </div>

            <div style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column',flex:1}} >
            <label style={{display:'flex',alignSelf:'center',padding:10,fontFamily:'Open Sans Regular',fontSize:widthScreen(27.5)}}>Please enter your information to take the exam</label>
          <form  style={numberCircle} onSubmit={this.handleSubmit}>
            <input type="text" value={this.state.firstName} onChange={this.setFirstName} placeholderStyle={{fontSize:widthScreen(22),fontFamily:'Open Sans Regular',paddingLeft:25}} style={{width:widthScreen(580),paddingTop:heightScreen(24),paddingBottom:heightScreen(24) ,borderColor:'transparent',borderRadius:3,marginBottom:heightScreen(22)}} placeholder="FIRST NAME" />
            <input type="text" value={this.state.lastName} onChange={this.setLastName} style={{width:widthScreen(580),paddingTop:heightScreen(24),paddingBottom:heightScreen(24) ,borderColor:'transparent',borderRadius:3,marginBottom:heightScreen(22)}} placeholder="LAST NAME" />
            <input type="email" value={this.state.email} onChange={this.setEmail} style={{width:widthScreen(580),paddingTop:heightScreen(24),paddingBottom:heightScreen(24) ,borderColor:'transparent',borderRadius:3,marginBottom:heightScreen(22)}} placeholder="EMAIL ADDRESS" />
              <input type="password" value={this.state.password} onChange={this.setPassword}  style={{width:widthScreen(580),paddingTop:heightScreen(24),paddingBottom:heightScreen(24) ,borderColor:'transparent',borderRadius:3}} placeholder="PASSWORD"/>
            <input type="submit" value="Begin The Exam &rarr;"  
              style={styles.submit}
            />
          </form>
          </div>
          </div> : null}
         
      {this.state.user ? <>
        <div style={{justifyContent:'center'}}>
        <div
          style={{
           'justifyContent': "space-between",
            display:'flex',
            'flexDirection':'row'
          }}
        >   

       </div>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',paddingTop:heightScreen(80)}}>
          <div style={{backgroundColor:'#DCDCDC',borderRadius:5,marginLeft:5,marginRight:widthScreen(39),alignItems:'center',alignSelf:'center',width:'30%', borderTop : "thin solid darkgray",}}>
            <div style={{height:heightScreen(31),width:this.state.progressBar +"%",backgroundColor:'#86207C',borderRadius:5,display:'flex',flex:1}}/>
          </div>
            <label style={{fontFamily:'Open Sans Bold', fontSize:24,color:'#86207C'}}> {this.state.progressBar +"%"}</label>
      </div>
        <div style={{
                display:'flex',
                'flexDirection': "column",
             }}>
          
            {Questionnaire.slice(this.state.debut-1,this.state.fin).map((elemnt, key) => (
              <div
                key={elemnt.key}
                style={styles.questionnaire}
              >
                <label style={styles.button,{display: 'flex',fontFamily:'Open Sans Regular',paddingBottom:heightScreen(30),paddingTop:heightScreen(80),fontSize:18}}>
                  {elemnt.val}
                </label>
                      <tr style={{justifyContent:'space-around',alignItems:'center',display:'flex'}}>
                          <label style={{display:'flex',paddingRight:widthScreen(41),color:'#41ac97',fontFamily:'Sans Open Bold',fontWeight:'bold'}}>Agree</label>
                          {
                              qcm(elemnt.key)
                          }
                          <label style={{display:'flex',color:'#86207C',fontSize:18,fontFamily:'Sans Open Bold',}}>Disagree</label>
                      </tr>
              </div>
            ))}

        </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
        
       { this.state.progressBar >=100?
      <Link 
          style={{ textDecoration: 'none' }}
          onClick={ (e)=> {
            e.preventDefault()
            const userId = firebaseService.auth().currentUser.uid;
            const {answers} = this.state;
      
            //ici on va regrouper par category ...
            let sorted =[];
            let sommation = answers.map( element =>   { 
                let filtre = answers.filter( x => Math.abs(x.category) === element.category);
                
              if ((filtre.length !== 0) &&  !sorted.includes(element.category)) 
              {      
                  let score = 0;
                  score =  filtre.map ( val => Number(val.score)).reduce ( (acc,curr) => acc + curr) ;
                 sorted.push(element.category);
                  return { 
                     [element.category]: filtre,
                     score:score
                    // answers.filter( x => Math.abs(x) === element)
                 }
             }
             })
             //numero 50 ne prend pas sa valeur....
             //passer la valeur element.question au lieu de key... puisque la cle change tjrs..s
             //je dois reintialiser la variabe a 1 quand on ava a une nouvelle page et activez next lorsque le  compte va a 5 et 
             // lorsque le compte va a 50 on active submit answer ou alors change Next to Submit answers...
             //if we only have negative they are not going to be save in the score... which is a problemm.....
             //desactiver le button next jusk ce que l'utilisateur... finisse de repondre aux questions sur la page...
              let rsultFinal = sommation.filter( x => x !== undefined);
      
              rsultFinal.forEach( val =>  {
               // let saved = { [userId]: val.score};
                firebaseService.database().ref('scores/' + 'category' + '/' + [Object.keys(val)[0]] + '/' + userId).set(
                 // saved
                   val.score
                   );
      
              });
               let resp ={
                  answers:answers.filter( val => val !==undefined),
                  groupAnswer: rsultFinal
              };
              console.log(resp);
            //Fin regrouper par catgeorie...
            firebaseService.database().ref('users/' + userId + '/').set(
           // firebaseService.database().ref('answers/').push(
              resp
            );
      
             this.getValue(1,'betterthan');
              this.getValue(2,'betterthan1');
             this.getValue(3,'betterthan2');
             this.getValue(4,'betterthan3');
             this.getValue(5,'betterthan4');
            // this.openModal();
            this.setState({showResult:true});
            move();
            setTimeout(() => {
              this.props.history.push({
                pathname: "/resultat",
                state:{ progress: this.state.betterthan4,
                  counting:true,
                  resultat1level:  this.state.betterthan,
                  resultat2level: this.state.betterthan1,
                  resultat3level: this.state.betterthan2,
                  resultat4level: this.state.betterthan3,
                  resultat5level: this.state.betterthan4,}
              })
          },5000);


            /*const { replace, to, delay, onDelayStart, onDelayEnd } = this.props;
            const { history } = this.context.router;

            onDelayStart(e, to);
            if (e.defaultPrevented) {
              return;
            }
            e.preventDefault();

            this.timeout = setTimeout(() => {
              if (replace) {
                history.replace(to);
              } else {
                history.push(to);
              }
              onDelayEnd(e, to);
            }, delay);*/

          }}
       >

       <button style={styles.butonSubmit}
            onClick ={() => console.log("clicked")}
            >Submit Answers</button>
            </Link>
            :null}
        </div> 
      </> : null } 

            { this.state.modalIsOpen?<ModalAnswers 
              modalOpen={this.state.modalOpen}
              openModal={this.openModal}
              closeModal={this.closeModal}
              modalIsOpen={this.state.modalIsOpen}
              composant ={
                <div style={{ alignItems:'center',width:'100%'}}>
                  <Gauge level ={this.state.betterthan} title="betterthan" color="#86207C"/>
                  <Gauge level ={this.state.betterthan1} title="betterthan1" color="red"/>
                  <Gauge level ={this.state.betterthan2} title="betterthan2" color="green"/>
                  <Gauge level ={this.state.betterthan3} title="betterthan3" color="blue"/>
                  <Gauge level ={this.state.betterthan4} title="betterthan4" color="orange"/>
                </div>
              }/> :null
              }
        <Footer text={true}/>
     </ErrorBoundary>
    );
  }
}
//
// style={[styles.button, {fontWeight: "bold", flex: 1 }]}
//backgroundColor: '#d3d3d3',
//'backgroundColor':'#F49608',
const styles = {
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
    fontFamily:'Sans Open Light',
    fontSize:21,
  },
  submit:{
    display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#F49608',
    'borderRadius':50,
    fontSize:widthScreen(22),
    fontFamily:'Sans Open Light',
    padding: heightScreen(20),
    marginTop:heightScreen(31),
    marginBottom:heightScreen(60),
    borderColor:'transparent'
  },
  questionnaire:{
    'justifyContent': "space-between",
     paddingBottom: heightScreen(40),
     display:'flex',
     'flexDirection':'column',
     alignItems:'center',
     borderBottom : "thin solid #DCDCDC",
     width: '30%',
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
  width: widthScreen(68),
  height: widthScreen(68),
  'border-radius': '50%',
  borderColor:'#41ac97'
},
radioButtonClicked1: {
width: widthScreen(68),
height: widthScreen(68),
'border-radius': '50%',
backgroundColor:'#41ac97',
},
radioButton2: {
  width: widthScreen(50),
  height: widthScreen(50),
  'border-radius': '50%',
  borderColor:'#41ac97'
},
radioButtonClicked2: {
width: widthScreen(50),
height: widthScreen(50),
'border-radius': '50%',
backgroundColor:'#41ac97',
},
radioButton3: {
  width: widthScreen(42),
  height: widthScreen(42),
  'border-radius': '50%',
  borderColor:'#41ac97'
},
radioButtonClicked3: {
width: widthScreen(42),
height: widthScreen(42),
'border-radius': '50%',
backgroundColor:'#41ac97',
},
radioButton4: {
  width: widthScreen(34),
  height: widthScreen(34),
  'border-radius': '50%',
},
radioButtonClicked4: {
width: widthScreen(34),
height: widthScreen(34),
'border-radius': '50%',
backgroundColor:'gray',
},
radioButton5: {
  width: widthScreen(42),
  height: widthScreen(42),
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked5: {
width: widthScreen(42),
height:widthScreen(42),
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton6: {
  width: widthScreen(52.25),
  height: widthScreen(52.25),
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked6: {
width: widthScreen(52.25),
height: widthScreen(52.25),
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton7: {
  width: widthScreen(68),
  height: widthScreen(68),
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked7: {
width: widthScreen(68),
height: widthScreen(68),
'border-radius': '50%',
backgroundColor:'#86207C',
}
};

export default withRouter(Description);
