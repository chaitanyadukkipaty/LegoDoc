<template lang="html">

<html lang="en">

  <head>
    <link rel="preconnect" href="https://cdnjs.cloudflare.com">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  </head>

  <body>

    <div class="toolbar">

      <button onclick="document.execCommand('underline', false, '');">
        <v-icon >format_underlined</v-icon>
      </button>

      <button onclick="document.execCommand('italic', false, '');">
        <v-icon >format_italic</v-icon>
      </button>


      <button onclick="document.execCommand('bold', false, '');">
        <v-icon >format_bold</v-icon>
      </button>


      <button  onclick="document.execCommand('cut',false,'')"><v-icon>not_interested</v-icon></button>

      <button  onclick="document.execCommand('undo',false,'')"><v-icon >undo</v-icon></button>

      <button onclick="document.execCommand('redo',false,'')"><v-icon >redo</v-icon></button>

      <button onclick="document.execCommand('strikeThrough',false,'')"><v-icon >format_strikethrough</v-icon></button>

      <button onclick="document.execCommand('delete',false,'')"><v-icon>backspace</v-icon></button>

      <button onclick="document.execCommand('selectAll',false,'')"><v-icon>select_all</v-icon></button>

      <!-- Jutify -->

      <button   onclick="document.execCommand('justifyCenter',false,'')"><v-icon>format_align_center</v-icon></button>
      <button onclick="document.execCommand('justifyLeft',false,'')"><v-icon>format_align_left</v-icon></button>
      <button  onclick="document.execCommand('justifyRight',false,'')"><v-icon>format_align_right</v-icon></button>
    </div>

    <div class="center">
      <div id="abc" class="editor" contenteditable>
        <p>Start typing</p>
      </div>
    </div>



  </body>


  </html>

</template>

<script>
export default {
  name: 'editor'
}
</script>

<style lang="css" scoped>
*,*::before,*::after{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}


html{
    font-size: 1.1rem;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}

.toolbar{
    display:grid;
    grid-template-columns: repeat(auto-fit,minmax(20px,40px));
    color: #000;
    grid-gap: 1rem;
    padding: 1rem;
    justify-content: center;
    align-items:center;
}

.tool-items{
    background-color: rgb(27, 26, 26);
     padding-top: .6rem;
     padding-bottom:.6rem;
    cursor: pointer;
    color: #ffff;
}
.tool-items:hover{
    box-shadow: none;
    background-color: #6b5e5e;

}



.center{
     display: flex;
     justify-content: center;
     flex-wrap: wrap;
}


.editor{
    width:70vw;
    height: 50vh;
    margin: 2rem;
    padding: 1rem;
    font-size: 1.2rem;
    box-shadow: 0 .1rem .4rem black;
    border: 1px solid black;
    overflow-y: auto;
}

.getcontent{
    white-space: pre;
    width: 80vw;
    background-color: rgb(255, 255, 255);
    overflow: auto;
    padding: 1rem;
    display: none;
    margin-top: 1rem;
    box-shadow: .1rem .1rem .5rem rgb(255, 255, 255);
    border: 1px solid rgb(0, 0, 0);
}



.btn{
      padding: .5rem;
      background-color: #7e1111;
      margin-right: 1rem;
      color: #fffffc;
      letter-spacing: .1rem;
      font-size: 1rem;
      border-radius: .2rem;
      cursor: pointer;
      outline: none;
      box-shadow: 0 .4rem .4rem black;
      transition: all .3s;
}

.btn:hover{
      background-color: #7e1111d0;
      box-shadow: 0 .1rem .1rem black;
}



img{
    width: 60px;
    height: 60px;
    margin-top: .4rem;
    border-radius: 50rem;
}
label {
    margin-left: 0.04rem;
    padding-left:.7rem
}
</style>
