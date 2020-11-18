import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary';
import firebaseService from './firebaseService';
import faces from './img/faces.png';
import './App.css';
//CATEGORY REMAINS THE SAME ON ABSOLUTE VALUE MEANNIG POSITIVE AND NEGATIVE BELONG TO THE SAME SET....

const Questionnaire = [
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

var debut = 1;
var  fin = 5;
var Questions = Questionnaire.slice(debut-1,fin);
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
  state = {
    selected: "",
    answers: [],
    site: '',
      address: '',
      debut: 1,
      fin:5,
      somme: debut + fin,
  };


  submitAnswers = () =>{
    /*let userId = firebase.auth.currentUser.uid();
    let saveData = this.state.answers;
    firebase.database().ref('users/' + userId).set({
      saveData
    });*/
  };

  nextQuestionSet = () =>{
    const {debut,fin} = this.state;
    this.setState({debut: debut+ 5, fin: fin+ 5});
  };

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
    /*
<label style={{textAlign:'center',fontWeight:'bold'}}>
          {elmnt.valeur}
        </label>
*/

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
        try {
            let answers = [...this.state.answers];
            console.log("addasdsa");
            let rslt = {
                keyresponse: elmnt.key,
                question: Questions[question].val,
                response: response[elmnt.key-1].valeur,
                category: Questions[question].category,
                score: Questions[question].category>0 ? response[elmnt.key-1].key:response[elmnt.key-1].quote,
            };
            answers[question] = rslt;
            this.setState({ selected: elmnt.key, answers });  

        } catch (error) {
        this.setState({ error });
        }
    }

    /*

    let sorted =[];
let sommation = array1.map( element =>   { 
    let filtre = array1.filter( x => Math.abs(x.category) === element.category);
    
  if ((filtre.length !== 0) &&  !sorted.includes(element.category)) 
  {      
      let score = 0;
      score =  filtre.map ( val => Number(val.score)).reduce ( (acc,curr) => acc + curr) ;
     sorted.push(element.category);
      return { 
         [element.category]: filtre,
         score:score
        // array1.filter( x => Math.abs(x) === element)
     }
 }
 })
  let rsultFinal = sommation.filter( x => x !== undefined);
  console.log(JSON.stringify(rsultFinal));
    */
    const qcm = (question) => {
        let answers = [...this.state.answers];
      return response.map((elmnt) => (
        <td key={elmnt.key} style={{ padding: 5 }}>
          <button style={(answers[question])  && answers[question].keyresponse === elmnt.key ? styles['radioButtonClicked' + elmnt.key] : styles['radioButton' + elmnt.key]} 
                  onClick={()=>handleClick(question,elmnt)}
          />
        </td>
      ));
    };
    // background: `url(${faces})`, padding:20
    return (
      <ErrorBoundary>
        <label> asds{Math.abs(-10)}</label>
        <div style={{backgroundColor:'#D3D3D3',display:'flex',flexDirection:'column'}}>
          <img
            style={{display: 'flex','marginLeft': 50,padding:10}}
          src={faces} alt="faces"/>
          
          <label style={{display:'flex',alignSelf:'center',padding:10}}>Please enter your information to take the exam</label>
            <form  style={numberCircle} onSubmit={this.handleSubmit}>
              <input type="text" value={this.state.firstName} onChange={this.setFirstName} style={{borderColor:'transparent',borderRadius:3,margin:5,padding:5}} placeholder="FIRST NAME" />
              <input type="text" value={this.state.lastName} onChange={this.setLastName} style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="LAST NAME" />
              <input type="email" value={this.state.email} onChange={this.setEmail} style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="EMAIL ADDRESS" />
               <input type="password" value={this.state.password} onChange={this.setPassword}  style={{borderColor:'transparent',borderRadius:3,margin:5}} placeholder="PASSWORD"/>
              <input type="submit" value="Begin The Exam &rarr;"  
                style={{
                  display:'flex',
                  alignSelf:'center',
                  color:'white',
                  'backgroundColor':'#FF6347',
                  'borderRadius':20,
                  padding: 7,
                  marginTop:5,
                  marginBottom:15,
                  borderColor:'transparent'
                }}
              />
        </form>
        </div>
         
      <div style={{justifyContent:'center'}}>
        <div
          style={{
           'justifyContent': "space-around",
            display:'flex',
            'flexDirection':'row'
          }}
        >   

       </div>
        <div style={{
                display:'flex',
                'flexDirection': "column"
             }}>
          {Questions.map((elemnt, key) => (
            <div
              key={key}
              style={{
               'justifyContent': "space-between",
                padding: 10,
                display:'flex',
                'flexDirection':'column',
                alignItems:'center',
                borderBottom : "thin solid #DCDCDC",
                width: '30%',
                alignSelf:'center'
              }}
            >
              <label style={styles.button,{display: 'flex'}}>
                {elemnt.val}
              </label>
                    <tr style={{justifyContent:'space-around',alignItems:'center',display:'flex'}}>
                        <label style={{display:'flex',padding:10,color:'#7FFFD4',fontWeight:'bold'}}>Agree</label>
                        {
                            qcm(key)
                        }
                        <label style={{display:'flex',padding:10,color:'#8B008B',fontWeight:'bold'}}>Disagree</label>
                    </tr>
            </div>
          ))}
        </div>
        </div>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',padding:15}}>
            
       <button style={{
              display:'flex',
              alignSelf:'center',
              color:'white',
              'backgroundColor':'#FF6347',
              'borderRadius':20,
              padding: 10,
              borderColor:'transparent'
            }}
            onClick ={this.submitAnswers}
            >SUBMIT ANSWERS</button>

<button style={{
              display:'flex',
              alignSelf:'center',
              color:'white',
              'backgroundColor':'#FF6347',
              'borderRadius':20,
              padding: 10,
            }}
            onClick ={() => {
             // const userId = firebaseService.auth().currentUser.uid;
              const {answers} = this.state;
             // firebaseService.database().ref('answers/' +userId ).set(
              firebaseService.database().ref('answers/').push(
                answers
              );
            }}
            >NEXT SET</button>
        </div>
            
          <label>{JSON.stringify(this.state.answers)}</label>
      </ErrorBoundary>
    );
  }
}
//
// style={[styles.button, {fontWeight: "bold", flex: 1 }]}
const styles = {
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
backgroundColor:'green',
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
backgroundColor:'purple',
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
backgroundColor:'blue',
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
  borderColor: '#8B008B',
},
radioButtonClicked5: {
width: '25px',
height: '25px',
'border-radius': '50%',
backgroundColor:'orange',
},
radioButton6: {
  width: '30px',
  height: '30px',
  'border-radius': '50%',
  borderColor: '#8B008B',
},
radioButtonClicked6: {
width: '30px',
height: '30px',
'border-radius': '50%',
backgroundColor:'black',
},
radioButton7: {
  width: '35px',
  height: '35px',
  'border-radius': '50%',
  borderColor: '#8B008B',
},
radioButtonClicked7: {
width: '35px',
height: '35px',
'border-radius': '50%',
backgroundColor:'brown',
}
};

export default Description;
