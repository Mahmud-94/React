import React from 'react'

export default function Footer() {
  return (
    <div>
        
        <footer className="no-top pl20 pr20">
                <div className="subfooter">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-6">&copy; Copyright 2023 - Seaside Hotel by <span className="id-color">Designesia</span></div>
                      <div className="col-md-6 text-right">
                        <div className="social-icons">
                          <a href="#"><i className="fa fa-facebook fa-lg"></i></a>
                          <a href="#"><i className="fa fa-twitter fa-lg"></i></a>
                          <a href="#"><i className="fa fa-rss fa-lg"></i></a>
                          <a href="#"><i className="fa fa-google-plus fa-lg"></i></a>
                          <a href="#"><i className="fa fa-skype fa-lg"></i></a>
                          <a href="#"><i className="fa fa-dribbble fa-lg"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a href="#" id="back-to-top"></a>
              </footer>
    </div>
  )
}
