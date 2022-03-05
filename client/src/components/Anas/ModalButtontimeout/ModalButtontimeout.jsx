import React, {useState} from "react";
import Axios from "axios";
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

export default function BtnModalTimeOut() {
 
    let timerInterval

    Swal.fire({
      title: 'Auto close alert!',
      html:
        'I will close in <strong></strong> seconds.<br/><br/>' +
        '<button id="resume" class="btn btn-success" disabled>' +
          'Hey Rajaa... you can wait please!' +
        '</button><br/><br/>' +
        '<button id="toggle" class="btn btn-danger">' +
          'Dont forget to reload the page after the wait is over' +
        '</button>',
      timer: 8000,
      didOpen: () => {
        const content = Swal.getHtmlContainer()
        const $ = content.querySelector.bind(content)
    
        const stop = $('#stop')
        const resume = $('#resume')
        const toggle = $('#toggle')
        const increase = $('#increase')
    
        Swal.showLoading()
    
        function toggleButtons () {
          stop.disabled = !Swal.isTimerRunning()
          resume.disabled = Swal.isTimerRunning()
        }
    
        stop.addEventListener('click', () => {
          Swal.stopTimer()
          toggleButtons()
        })
    
        resume.addEventListener('click', () => {
          Swal.resumeTimer()
          toggleButtons()
        })
    
        toggle.addEventListener('click', () => {
          Swal.toggleTimer()
          toggleButtons()
        })
    
        increase.addEventListener('click', () => {
          Swal.increaseTimer(5000)
        })
    
        timerInterval = setInterval(() => {
          Swal.getHtmlContainer().querySelector('strong')
            .textContent = (Swal.getTimerLeft() / 1000)
              .toFixed(0)
        }, 100)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })
}
