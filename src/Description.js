import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary';
import firebaseService from './firebaseService';
import faces from './img/faces.png';
import logo from './img/logo.png';
import bgHeader from './img/bg-header.png';
import './App.css';
import firebase from "firebase/app";
//CATEGORY REMAINS THE SAME ON ABSOLUTE VALUE MEANNIG POSITIVE AND NEGATIVE BELONG TO THE SAME SET....
import Canvas from './Canvas';
import ModalAnswers from './ModalAnswers';
import Gauge from './Gauge';
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

const QuestionnaireBrute = [
  {
    key: "1",
    val: "Am the life of the party.",
    category: 1,
    pondere: 7
  },
  {
    key: "2",
    val: "Feel little concern for others.",
    category: -2,
    pondere: 1
  },
  { key: "3", val: "Am always prepared.", category: 3, pondere: 7 },
  {
    key: "4",
    val: "Get stressed out easily.",
    category: -4,
    pondere: 1
  },
  { key: "5", val: "Have a rich vocabulary.", category: 5, pondere: 7 },
  { key: "6", val: "Don't talk a lot.", category: -1, pondere: 1 },
  {
    key: "7",
    val: "Am interested in people.",
    category: 2,
    pondere: 7
  },
  {
    key: "8",
    val: "Leave my belongings around.",
    category: -3,
    pondere: 1
  },
  {
    key: "9",
    val: " Am relaxed most of the time.",
    category: 4,
    pondere: 7
  },
  {
    key: "10",
    val: "Have difficulty understanding abstract ideas.",
    category: -5,
    pondere: 1
  },
  {
    key: "11",
    val: "Feel comfortable around people.",
    category: 1,
    pondere: 7
  },
  { key: "12", val: "Insult people.", category: -2, pondere: 1 },
  {
    key: "13",
    val: "Pay attention to details.",
    category: 3,
    pondere: 7
  },
  { key: "14", val: "Worry about things.", category: -4, pondere: 1 },
  {
    key: "15",
    val: "Have a vivid imagination.",
    category: 5,
    pondere: 7
  },
  {
    key: "16",
    val: "Keep in the background.",
    category: -1,
    pondere: 1
  },
  {
    key: "17",
    val: "Sympathize with others' feelings.",
    category: 2,
    pondere: 7
  },
  {
    key: "18",
    val: "Make a mess of things.",
    category: -3,
    pondere: 1
  },
  { key: "19", val: "Seldom feel blue.", category: 4, pondere: 7 },
  {
    key: "20",
    val: "Am not interested in abstract ideas.",
    category: -5,
    pondere: 1
  },
  { key: "21", val: "Start conversations.", category: 1, pondere: 7 },
  {
    key: "22",
    val: "Am not interested in other people's problems.",
    category: -2,
    pondere: 1
  },
  {
    key: "23",
    val: "Get chores done right away.",
    category: 3,
    pondere: 7
  },
  { key: "24", val: "Am easily disturbed.", category: -4, pondere: 1 },
  { key: "25", val: "Have excellent ideas.", category: 5, pondere: 7 },
  { key: "26", val: "Have little to say.", category: -1, pondere: 1 },
  { key: "27", val: "Have a soft heart.", category: 2, pondere: 7 },
  {
    key: "28",
    val: "Often forget to put things back in their proper place.",
    category: -3,
    pondere: 1
  },
  { key: "29", val: "Get upset easily.", category: -4, pondere: 1 },
  {
    key: "30",
    val: "Do not have a good imagination.",
    category: -5,
    pondere: 1
  },
  {
    key: "31",
    val: "Talk to a lot of different people at parties.",
    category: 1,
    pondere: 7
  },
  {
    key: "32",
    val: "Am not really interested in others.",
    category: -2,
    pondere: 1
  },
  { key: "33", val: "Like order.", category: 3, pondere: 7 },
  { key: "34", val: "Change my mood a lot.", category: -4, pondere: 1 },
  {
    key: "35",
    val: "Am quick to understand things.",
    category: 5,
    pondere: 7
  },
  {
    key: "36",
    val: "Don't like to draw attention to myself.",
    category: -1,
    pondere: 1
  },
  {
    key: "37",
    val: "Take time out for others.",
    category: 2,
    pondere: 7
  },
  { key: "38", val: "Shirk my duties.", category: -3, pondere: 1 },
  {
    key: "39",
    val: "Have frequent mood swings.",
    category: -4,
    pondere: 1
  },
  { key: "40", val: "Use difficult words .", category: 5, pondere: 7 },
  {
    key: "41",
    val: "Don't mind being the center of attention.",
    category: 1,
    pondere: 7
  },
  { key: "42", val: "Feel others' emotions.", category: 2, pondere: 7 },
  { key: "43", val: "Follow a schedule.", category: 3, pondere: 7 },
  { key: "44", val: "Get irritated easily.", category: -4, pondere: 1 },
  {
    key: "45",
    val: "Spend time reflecting on things.",
    category: 5,
    pondere: 7
  },
  {
    key: "46",
    val: "Am quiet around strangers.",
    category: -1,
    pondere: 1
  },
  {
    key: "47",
    val: "Make people feel at ease.",
    category: 2,
    pondere: 7
  },
  {
    key: "48",
    val: "Am exacting in my work.",
    category: 3,
    pondere: 7
  },
  { key: "49", val: "Often feel blue.", category: -4, pondere: 1 },
  { key: "50", val: "Am full of ideas.", category: 5, pondere: 7 }
];

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
//GO AUTOMATICALLY TO THE NEXT PAGE ONCE YOU HAVE ANSWER THE 5 QUESTIONS.... GERREEEEEEEEEEEEEEE
//ADD A LOADING RESULT.... SETtIMEoUT TO DISPLAY RESULT...  2 or 3 seconds... 
//Take personality Test should remain with the form 
// remove the menu once the user start the test and only leave him the Home page options... by clicking on the logo 
// remove the text on the logout for the user logging Info .. 
//remove the header on the sign up page and change the height as the same with the form.... flex : 1  for each
 //SHOW A SCREENSHOT OF THE RESULT IMAGE..
 // DISPLAY THE RESULT IMAGE TO THE USER WHO HAS TAKEN THE TEST ALREADY.... 
 //SHARE THE IMAGE URL TO THE SOCIAL NETWORK
 // KEEP ONLY fACEBOOK tWITTER, LINKEDiN AS SOCIAL PLATFORM TO SHARE ON ... 
 //ALIGNMENT FOR THE HOME PAGE HAS TO BE CHECKED..
 // THE FOOTER ALSO HAS TO BE ON POINT .. 
 // MENU PAGE RESPONSIVENESS... 
 //PREMIUM BUTTON... 
 //blurred image on the background.... and Premium Button on top.... or put the Premium button on the modal ... 

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
        //PASSER LA FONCTION DE DISPLAY EN PARAMETRE AUSSI 
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setPassword = this.setPassword.bind(this);
    this.setEmail = this.setEmail.bind(this);
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
      console.log(snapshot.val());
      this.setState({recycle:snapshot.val()});
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

  render() {
    let response = [
      {
        key: 1,
        valeur: "Strongly Disagree",
        quote: 7
      },
      {
        key: 2,
        valeur: "Disagree",
        quote: 6
      },
      {
        key: 3,
        valeur: "Slightly Disagree",
        quote: 4
      },
      {
        key: 4,
        valeur: "Neutral",
        quote: 4
      },
      {
        key: 5,
        valeur: "Slightly Agree",
        quote: 3
      },
      {
        key: 6,
        valeur: "Agree",
        quote: 2
      },
      {
        key: 7,
        valeur: "Strongly Agree",
        quote: 1
      }
    ];
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

            //new pages..... 
            setTimeout(() =>{
              const {debut,fin} = this.state;
                //Move to the next page *****
            if (nextQuestion.length ===5 && fin<100)
            {
              this.setState({debut:debut+5,fin:fin+5});
              nextQuestion=[];
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
        <td key={elmnt.key} style={{ padding: 5 }}>
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

    // background: `url(${faces})`, padding:20
    return (
      <ErrorBoundary>
        <div style={{justifyContent:'center',display:'flex',alignItems:'center'}}>
          {this.state.user? <img  style={{padding:10,}} src={logo} alt="logo"/>:null}
        </div>

          <div style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column'}}>
            

             {!this.state.user ? <> 

              <div 
              style={{backgroundImage: `url(${bgHeader})`, height:470,justifyContent:'center',display:'flex',flexDirection:'column'
              }}
            >
              <div>
                <label style={{marginLeft:'23%',fontSize:35,fontFamily:'Open Sans Bold'}}> Take The Personality Test</label>
              </div>
              <label style={{width:'27%',marginLeft:'23%',fontFamily:'Open Sans Light'}} > Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </label>
            </div>

             <label style={{color:'red',alignSelf:'center'}}> {
                this.state.message
             }</label>

              <label style={{display:'flex',alignSelf:'center',padding:10,fontFamily:'Open Sans Regular'}}>Please enter your information to take the exam</label>
            <form  style={numberCircle} onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.firstName} onChange={this.setFirstName} style={{borderColor:'transparent',borderRadius:3,margin:5,padding:5}} placeholder="FIRST NAME" />
              <input type="text" value={this.state.lastName} onChange={this.setLastName} style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="LAST NAME" />
              <input type="email" value={this.state.email} onChange={this.setEmail} style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="EMAIL ADDRESS" />
               <input type="password" value={this.state.password} onChange={this.setPassword}  style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="PASSWORD"/>
              <input type="submit" value="Begin The Exam &rarr;"  
                style={styles.submit}
              />
        </form>
             </> : null}
         
        </div>
      {this.state.user ? <>
        <div style={{justifyContent:'center'}}>
        <div
          style={{
           'justifyContent': "space-around",
            display:'flex',
            'flexDirection':'row'
          }}
        >   

       </div>

      <div style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',padding:15}}>
          <div style={{backgroundColor:'#DCDCDC',borderRadius:5,marginLeft:5,margin:5,alignItems:'center',alignSelf:'center',width:'30%'}}>
            <div style={{height:25,width:this.state.progressBar +"%",backgroundColor:'#86207C',borderRadius:5,display:'flex',flex:1}}/>
          </div>
            <label style={{fontFamily:'Open Sans Bold', fontSize:24,color:'#86207C'}}> {this.state.progressBar +"%"}</label>
      </div>
        <div style={{
                display:'flex',
                'flexDirection': "column"
             }}>
          {Questionnaire.slice(this.state.debut-1,this.state.fin).map((elemnt, key) => (
            <div
              key={elemnt.key}
              style={styles.questionnaire}
            >
              <label style={styles.button,{display: 'flex',fontFamily:'Open Sans Regular'}}>
                {elemnt.val}
              </label>
                    <tr style={{justifyContent:'space-around',alignItems:'center',display:'flex'}}>
                        <label style={{display:'flex',padding:10,color:'#7FFFD4',fontFamily:'Sans Open Bold',fontWeight:'bold'}}>Agree</label>
                        {
                            qcm(elemnt.key)
                        }
                        <label style={{display:'flex',padding:10,color:'#86207C',fontSize:18,fontFamily:'Sans Open Bold',fontWeight:'bold'}}>Disagree</label>
                    </tr>
            </div>
          ))}
        </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:15}}>
                        
        <button style={styles.buton}
            onClick ={() => {
              const {debut,fin} = this.state;
              this.setState({debut:debut-5,fin:fin-5})
            }}
            >
              Previous Questions
            </button>

          <button style={{
              display:'flex',
              alignSelf:'center',
              color:'white',
              'backgroundColor':'red',
              'borderRadius':20,
              padding: 10,
            }}
            onClick ={() => {
              firebase.auth().signOut().then(function() {
              // Sign-out successful.
            }).catch(function(error) {
              // An error happened.
            });
            }}
            >
              LOG OUT 
            </button>

       <button style={styles.buton}
            onClick ={this.submitAnswers}
            >SUBMIT ANSWERS</button>


   
            <button style={styles.buton}
            onClick ={this.arrayOfAnswers}
            >CHECK THE ANSERS ON CATEGORY 5 </button>

            <button style={styles.buton}
            onClick ={() => {
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
        
              this. getValue(1,'betterthan');
              this. getValue(2,'betterthan1');
              this. getValue(3,'betterthan2');
              this. getValue(4,'betterthan3');
              this. getValue(5,'betterthan4');
              this.openModal();
            }}
            >SAVE ANSWERS</button>
            { nextQuestion.length ===5 ?<button style={styles.buton}
            onClick ={() => {
              
            }}
            >
              Next  &rarr;
          </button> : null} 

        </div> 
      </> : null }   
           {this.state.arrayScore && 
            <div style={{width:'50%'}}>
            <Canvas   data = {Object.values(this.state.arrayScore)}
             labels =  {Object.keys(this.state.arrayScore)}/>
            </div>
            } 
              <ModalAnswers 
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
              }/>
      </ErrorBoundary>
    );
  }
}
//
// style={[styles.button, {fontWeight: "bold", flex: 1 }]}
//backgroundColor: '#d3d3d3',
//'backgroundColor':'#F49608',
const styles = {
  submit:{
    display:'flex',
    alignSelf:'center',
    color:'white',
    'backgroundColor':'#F49608',
    'borderRadius':20,
    padding: 7,
    marginTop:5,
    marginBottom:15,
    borderColor:'transparent'
  },
  questionnaire:{
    'justifyContent': "space-between",
     padding: 10,
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
    padding: 10,
    margin:2
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
  width: '35px',
  height: '35px',
  'border-radius': '50%',
  borderColor:'#00FA9A'
},
radioButtonClicked1: {
width: '35px',
height: '35px',
'border-radius': '50%',
backgroundColor:'#00FA9A',
},
radioButton2: {
  width: '30px',
  height: '30px',
  'border-radius': '50%',
  borderColor:'#00FA9A'
},
radioButtonClicked2: {
width: '30px',
height: '30px',
'border-radius': '50%',
backgroundColor:'#00FA9A',
},
radioButton3: {
  width: '25px',
  height: '25px',
  'border-radius': '50%',
  borderColor:'#00FA9A'
},
radioButtonClicked3: {
width: '25px',
height: '25px',
'border-radius': '50%',
backgroundColor:'#00FA9A',
},
radioButton4: {
  width: '20px',
  height: '20px',
  'border-radius': '50%',
},
radioButtonClicked4: {
width: '20px',
height: '20px',
'border-radius': '50%',
backgroundColor:'gray',
},
radioButton5: {
  width: '25px',
  height: '25px',
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked5: {
width: '25px',
height: '25px',
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton6: {
  width: '30px',
  height: '30px',
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked6: {
width: '30px',
height: '30px',
'border-radius': '50%',
backgroundColor:'#86207C',
},
radioButton7: {
  width: '35px',
  height: '35px',
  'border-radius': '50%',
  borderColor: '#86207C',
},
radioButtonClicked7: {
width: '35px',
height: '35px',
'border-radius': '50%',
backgroundColor:'#86207C',
}
};

export default Description;
