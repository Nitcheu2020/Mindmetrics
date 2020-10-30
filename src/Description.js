import React, { Component } from "react";
import ErrorBoundary from './ErrorBoundary';
const Questions = [
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

class Description extends Component {
  state = {
    selected: "",
    answers: [],
    site: '',
      address: ''
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
    const qcm = (question) => {
        let answers = [...this.state.answers];
      return response.map((elmnt) => (
        <td key={elmnt.key} style={{ padding: 5 }}>
                 <input type="radio" name = {Questions[question].val}
                            value={elmnt.valeur}
                            checked={(answers[question])  && answers[question].keyresponse === elmnt.key}
                            onChange={() => handleClick(question,elmnt)}
                 />

        </td>
      ));
    };

    return (
      <ErrorBoundary>
      <div style={{justifyContent:'center'}}>
        <div
          style={{
           'justifyContent': "space-around",
            display:'flex',
            'flexDirection':'row'
          }}
        >
          <label>{JSON.stringify(this.state.answers)}</label>
                <tr style={styles.tbody}>
                    {response.map((elmnt) => (
                        <td key={elmnt.key}>
                        <label style={{ padding: 5 }}> {elmnt.valeur}</label>
                        </td>
                    ))}
                </tr>
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
                'flexDirection':'row'
              }}
            >
              <label style={styles.button,{fontWeight: "bold",display: 'flex',}}>
                {elemnt.val}
              </label>
                    <tr style={styles.tbody}>
                        {
                            qcm(key)
                        }
                    </tr>
            </div>
          ))}
        </div>
        </div>
      </ErrorBoundary>
    );
  }
}
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
    'backgroundColor': "blue",
    width:'50%'
     //padding: 10,
    //'marginHorizontal': 1
  }
};

export default Description;
