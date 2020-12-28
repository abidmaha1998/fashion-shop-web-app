import React from 'react';
import 'antd/dist/antd.css';
import { Steps, Button, message } from 'antd';
import CompRecapitulatif from './CompRecapitulatif';
import CompInformations from './CompInformations';
import CompPayements from './CompPayements';
const { Step } = Steps;
const parag = () => {
  return(<p>ok<span>88</span></p>)
}
const steps = [
  {
    title: 'Recapitulatif',
    content:'Recapitulatif',
  },
  {
    title: 'Informations',
    content: 'Informations',
  },
  {
    title: 'Payements',
    content: 'Payements',
  },
];

const CompSteps = () => {
    const [current, setCurrent] = React.useState(0);

    const next = () => {
      setCurrent(current + 1);
    };
  
    const prev = () => {
      setCurrent(current - 1);
    };
  
    return (
      <>
      <Steps current={current}>
        {steps.map(item => (
          <>
          <Step key={item.title} title={item.title} />
          
          </>
        ))}
      </Steps>
      <div className="steps-content">
        {steps[current].content == 'Recapitulatif' && <div>
          <CompRecapitulatif/>
          
          </div>}
        {steps[current].content == 'Informations' && <div><CompInformations/>
          </div>}
        {steps[current].content == 'Payements' && <div> <CompPayements/> </div>}
        
        </div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
    );
}
 
export default CompSteps;