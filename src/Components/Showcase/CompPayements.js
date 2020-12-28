import React from 'react';
import { Radio} from 'antd';
const CompPayements = () => {
    const radioStyle = {
        display: 'block',
        height: '30px',
        lineHeight: '30px',
        
      };
    return ( 
        <>
        <div> 
            <h3> Méthode de paiement :</h3>
            <Radio.Group>
            <Radio checked style={radioStyle} value={1}>Paiement a la livraison</Radio>
            <Radio style={radioStyle} value={2}>Paiement on ligne</Radio>
            
            </Radio.Group>
        </div>
        </>
    );
}
 
export default CompPayements;