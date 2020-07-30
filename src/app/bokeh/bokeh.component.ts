import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BokehVars } from './bokeh';
import axios from 'axios'
declare var Bokeh: any;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Component({
  selector: 'app-bokeh',
  templateUrl: './bokeh.component.html',
  styleUrls: ['./bokeh.component.css']
})

export class BokehComponent implements OnInit {

  canvasUrl = 'http://localhost:5000/render/canvas';
  bokehServerUrl= 'http://localhost:5000/';

  constructor(private http: HttpClient) { 
  }

  ngOnInit() {
  }

  loadCanvas = function(){
    axios.get(this.canvasUrl).then(resp => Bokeh.embed.embed_item(resp.data, 'testPlot'))
  }

  loadServer = function(){
    var newdiv = document.createElement('div');
    axios.get(this.bokehServerUrl).then(
      resp => this.handleResponse(resp));
  }

  handleResponse = function(response){
    var newDiv = document.createElement('div');
    newDiv.innerHTML = response.data;
    document.getElementById("testServerPlot").appendChild(newDiv);
    //document.getElementsByTagName('head')[0].appendChild(newDiv)
  }

  
  
}