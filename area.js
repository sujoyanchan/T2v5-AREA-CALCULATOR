updateForm=()=>{
    document.getElementById('id_output').innerHTML='';
    let shape=document.getElementById('id_shapes').value;
    document.getElementById('id_inputs_circle').hidden=true;
    document.getElementById('id_inputs_triangle').hidden=true;
    document.getElementById('id_inputs_square').hidden=true;
    document.getElementById('id_inputs_rectangle').hidden=true;
    if (shape=='circle'){
        document.getElementById('id_inputs_circle').hidden=false;
    }
    else if (shape=='triangle'){
        document.getElementById('id_inputs_triangle').hidden=false;
    }
    else if (shape=='square'){
        document.getElementById('id_inputs_square').hidden=false;
    }
    else{
        document.getElementById('id_inputs_rectangle').hidden=false;
    }    
}

calculateArea=()=>{
    let area=0;
    let shape=document.getElementById('id_shapes').value;
    if (shape=='circle'){
        let radius=document.getElementById('id_radius').value;
        if (radius<0){
            alert('radius of circle cannot be negative');
            clearData();
        }
        else if (radius=='' || radius==0){
            alert('radius of circle cannot be empty');
            clearData();
        }
        else if (radius.replace('.','').length>15){
            alert('radius entered cannot be more than 15 digits')
            clearData();
        }
        else{
            area=Math.PI*radius*radius;
        }
    }
    else if (shape=='triangle'){
        let base=document.getElementById('id_base').value;
        let height=document.getElementById('id_height').value;
        if (base<0){
            alert('base of triangle cannot be negative');
            clearData();
        }
        else if (height<0){
            alert('height of triangle cannot be negative');
            clearData();
        }
        else if (base=='' || base==0){
            alert('base of triangle cannot be empty');
            clearData();
        }
        else if (height=='' || height==0){
            alert('height of triangle cannot be empty');
            clearData();
        }
        else if (base.replace('.','').length>15){
            alert('base entered cannot be more than 15 digits')
            clearData();
        }
        else if (height.replace('.','').length>15){
            alert('height entered cannot be more than 15 digits')
            clearData();
        }
        else{
            area=(base*height)/2;
        }
    }
    else if (shape=='square'){
        let side=document.getElementById('id_side').value;
        if (side<0){
            alert('side of square cannot be negative');
            clearData();
        }
        else if (side=='' || side==0){
            alert('side of square cannot be empty');
            clearData();
        }
        else if (side.replace('.','').length>15){
            alert('side entered cannot be more than 15 digits')
            clearData();
        }
        else{
            area=side*side;
        }
    }
    else{
        let length=document.getElementById('id_length').value;
        let breadth=document.getElementById('id_breadth').value;
        if (length<0){
            alert('length of rectangle cannot be negative');
            clearData();
        }
        else if (breadth<0){
            alert('breadth of rectangle cannot be negative');
            clearData();
        }
        else if (length=='' || length==0){
            alert('length of rectangle cannot be empty');
            clearData();
        }
        else if (breadth=='' || breadth==0){
            alert('breadth of rectangle cannot be empty');
            clearData();
        }
        else if (length.replace('.','').length>15){
            alert('length entered cannot be more than 15 digits')
            clearData();
        }
        else if (breadth.replace('.','').length>15){
            alert('breadth entered cannot be more than 15 digits')
            clearData();
        }
        else{
            area=length*breadth;
        }
    }  

    if (area != 0){
        document.getElementById('id_output').innerHTML='Area = '+area.toFixed(2)+' cm<sup>2</sup>';
    }
}

clearData=()=>{
    let shape=document.getElementById('id_shapes').value;
    document.getElementById('id_output').innerHTML='';
    if (shape=='circle'){
        document.getElementById('id_radius').value='';
    }
    else if (shape=='triangle'){
        document.getElementById('id_base').value='';
        document.getElementById('id_height').value='';
    }
    else if (shape=='square'){
        document.getElementById('id_side').value='';
    }
    else{
        document.getElementById('id_length').value='';
        document.getElementById('id_breadth').value='';
    } 
}