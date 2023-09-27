@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');

html, body {
    font-family:'Inter', sans-serif;
    font-size: 16px;
    font-weight: 400;
}

.btn-theme {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #F9D783;
    border: 1px solid #F9D783;
    color:#191919;
    font-weight: 500;
    padding: 8px 22px;
    border-radius: 25px;
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
}

.btn-theme i {
        margin-left: 10px;
        font-size: 0.9em;
    }
.btn-theme:hover {
    background-color: transparent;
    border: 1px solid #191919;
    color: #191919;
    }


.btn-dark {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #191919;
    border: 1px solid #191919;
    color: #FFFFFF;
    font-weight: 500;
    padding: 8px 22px;
    border-radius: 25px;
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
}

.btn-dark i {
    margin-left: 10px;
    font-size: 0.9em;
       }

.btn-dark:hover {
    background-color: transparent;
    border: 1px solid #191919;
    color: #191919;
       }


.btn-outline-dark {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: transparent;
    border: 1px solid #191919;
    color: #191919;
    font-weight: 500;
    padding: 8px 22px;
    border-radius: 25px;
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
}

 .btn-outline-dark i {
    margin-left: 10px;
    font-size: 0.9em;
    }

.btn-outline-dark:hover {
    background-color: #191919;
    border: 1px solid #191919;
    color :#FFFFFF;
    }


.btn-white-play {
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    color: #191919;
    font-weight: 500;
    padding: 8px 22px;
    border-radius: 25px;
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
}

.btn--white-play i {
    margin-right: 10px;
    font-size: 2em;
    }

.btn-white-play:hover {
    border: 1px solid #FFFFFF;
    border: 1px solid #FFFFFF;
    color:#191919;
    }


.btn-circle {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    background-color: #191919;
    border: 1px solid #191919;
    color: #FFFFFF;
    font-weight: 400;
    border-radius: 50%;
    transition: background 0.15s ease-in-out, border 0.15s ease-in-out;
}

.btn-circle i {
    font-size: 1.4em;
    }

.btn-circle:hover {
    background-color: #FFFFFF;
    border: 1px solid #FFFFFF;
    color: #191919;
    }


.section-title {
    font-family: 'Inter', sans-serif;
    color: #F94D1C;
    font-size: 18px;
    font-weight: 500;
}

.background-lines {
    position: absolute;
    left: 0;
    bottom: 0;
    z-index: -1;
}
.background-lines-right {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.background-lines-white-right {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.background-wavy-lines-right {
    position: absolute;
    right: -00px;
    top: 50%;
    z-index: -1;
}

.background-rectangle {
    background-color: #F0EFE9;
    width: 1057px;
    height: 425px;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: -1;
}

.dot-circles {
    display: flex;
    justify-content: center;
    align-items: center;
}

.dot-circles .dot-circle {
    height: 12px;
    width: 12px;
    border-radius: 50%;
    background-color: rgba(25, 25, 25, 0.2);
    margin: 3px 5px;
    }

.dot-circles .dot-circle.active {
    background-color: rgba(25, 25, 25);
        }
    


header {
    color: #191919;
    background-color: #F0EFE9;
    position: relative;
    z-index: 0;
}

.nav-section {
    padding: 10px 0px;
}
 .nav-section .container {
    display: flex;
    align-items: center;
    }

.nav-section .container .logotype {
     margin-right: 50px;
        }

.nav-section .container nav {
    width: 100%; 
        }

.nav-section .container nav .first-row {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid rgba(25,25,25,0.1);
    padding-bottom: 10px;
           }

.nav-section .container nav .first-row span {
    margin-right: 20px;
                }

.nav-section .container nav .first-row .company-info  span > i {
    margin-right: 10px;
                        }
                    

.nav-section .container nav .first-row .social-media a {
    color: #191919;
    margin-left: 10px;
                }

.nav-section .container nav .first-row .social-media a:hover {
     color: #99999999;
                        }
        

.nav-section .container nav .second-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 10px;
            }

.nav-section .container nav .second-row .navbar a {
    display: inline-block;
    margin-right: 20px;
    text-decoration: none;
    color:#191919;
    position: relative;
                }
.nav-section .container nav .second-row .navbar a.active::after, .nav-section .container nav .second-row .navbar a:hover::after{
    content: '';
    color: #000000;
    position: absolute;
    height: 2px;
    width: 15px;
    background: #191919;
    left: 50%;
    bottom: -3px;
    transform: translate(calc(50% - 15px));
                        }
                    

.showcase-section .container {
    display: flex;
    align-items: center; 
    }

.showcase-section .container .content-column {
     flex: 1;
        }

.showcase-section .container .content-column h1 {
                font-family: 'DM Sans', sans-serif;
                font-size: 76px;
                font-weight: 700;
            }

            .showcase.section .container .content-column p {
                font-family: 'Inter', sans-serif;
                font-size: 76px;
                font-weight: 400;
            }
            
        .showcase-section .container .content-column .button-links {
            display: flex;
        }

        .showcase-section .container .content-column .button-links a {
                margin-right: 20px;
            }
          

        .showcase-section .container .image-column {
            flex: 1;
        }

            .showcase-section .container .image-column img {
                position: relative;
                left: 70px;
            }

.brands-section {
    padding: 60px 0;
}

    .brands-section .container {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }


.feature-section {
    padding: 60px 0;
}
    .feature-section .container .section-border {
            margin: -50px -90px;
            padding: 80px 80px;
            border: 1px solid rgba(25,25,25,0,1);
    }

    .feature-section .container .section-border .feature-grid {
                display: grid;
                grid-template-columns: 1fr 1fr;
                gap: 0px;
    }

    .feature-section .container .section-border .feature-grid .feature-learnmore {
                    margin-right: 30%;
    }

    .feature-section .container .section-border .feature-grid .feature-learnmore h2 {
                        font-size: 45px;
                        font-weight: 700;
                        margin-bottom: 30px;
                    }

                    .feature-section .container .section-border .feature-grid .feature-learnmore a {
                        display: flex;
                    }
                

                    .feature-section .container .section-border .feature-grid .feature-boxes {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 50px;
                    }

                    .feature-section .container .section-border .feature-grid .feature-boxes.feature-box i {
                            font-size: 25px;
                            margin-bottom: 20px;
                        }

                        .feature-section .container .section-border .feature-grid .feature-boxes .feature.box h4 {
                            font-size: 22px;
                            font-weight: 700;
                        }
                    

.about-section {
    padding: 60px 0;
}

    .about-section.container {
        padding: 0px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-content: space-between;
    }

        .abou-section .container .image-column {
            position: relative;
        }

        .abou-section .container .image-column img {
                margin-left: 60px;
                width: 500px;
                height: 615px;
                object-fit: cover;
            }

            .abou-section .container .image-column .image-quote {
                box-shadow: -1px 0 5px 1px rgba(0,0,0,0,1);
                width: 368px;
                position: absolute;
                bottom: 30px;
                background-color: #BEEBFF;
                padding: 20px 50px 20px 20px;
            }

            .abou-section .container .image-column .image-quote h4 {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 20px;
                    font-weight: 700;
            }

            .abou-section .container .image-column .image-quote h4  span {
                        color: #F94D1C;
                        font-size: 16px;
                    }

                    .abou-section .container .image-column .image-quote p {
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 600;
                 }
            
        .about-section .container .content-column {
            margin-right: 20%;
        }

           .abou-section .container .content-column h2 {
                font-size: 45px;
                font-weight: 700;
                margin-bottom: 30px;
            }

            .abou-section .container .content-column p {
                margin-bottom: 40px;
            }

            .abou-section .container .content-column a {
                display: flex;
            }

            .abou-section .container .content-column .about-links {
                display: flex;
            }

            .abou-section .container .content-column .about-links a {
                    margin-right: 20px;
                }

.service-section {
    color: #191919;
    background-color: #F0EFE9;
    position: relative;
    z-index: 0;
    padding: 60px 0;
}

    .service-section .container .section-title {
            margin-bottom: 15px;
        }

        .service-section .container h2 {
            width: 40%;
            font-family: 'DM Sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
            margin-bottom: 45px;
        }

        .service-section .container .service-boxes {
            display: flex;
            justify-content: space-between;
            gap: 20px;
        }

        .service-section .container .service-boxes .service-box {
                padding: 30px;
                background-color:#ffffff;
                transition: all 0 15s ease-in-out;
        }

        .service-section .container .service-boxes .service-box .line {
                       background-color: #191919;
                       width: 40px;
                       height: 2px;
                       margin-bottom: 30px;
                }
                .service-section .container .service-boxes .service-box h4 {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                }

                .service-section .container .service-boxes .service-box p {
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                }

                .service-section .container .service-boxes .service-box .service-box-links {
                    display: flex;
                    justify-content: flex-end;
                    padding: 20px 0px 0px 0px ;
                }

                .service-section .container .service-boxes .service-box:hover {
                    background-color: #F9D783;
                }
            
        .service-section .container .browse-services {
            padding: 50px 0;
            display: flex;
            justify-content: center;
        }

.chooseus-section {
    position: relative;
    z-index: 0;
    padding: 60px 0 0 0;
}


.chooseus-section .container {
        display: flex;
        justify-content: space-between;
}

.chooseus-section .container .section-title {
            margin-bottom: 15px;
        }

       
.chooseus-section .container h2 {
            font-family: 'DM sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
            margin-bottom: 45px;
        }

       
.chooseus-section .container .content-column {
            flex: 1;
}

.chooseus-section .container .content-column ul {
                margin: 0;
                padding: 0;
                list-style: none;
}

.chooseus-section .container .content-column ul li {
                    margin-top: 40px;
                    display: grid;
                    grid-template-areas: "img title"
                                         "img title";
}

.chooseus-section .container .content-column ul li i {
                        font-size: 1.5em;
                        height: 60px;
                        width: 60px;
                        border-radius: 50%;
                        border: 1px solid rgba(25, 25, 25, 0.1);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        grid-area: img;
                    }
                    .chooseus-section .container .content-column ul li h5 {
                        font-family: 'DM Sans', sans-serif;
                        font-size: 22px;
                        font-weight: 700;
                        grid-area: title;
                    }

                    .chooseus-section .container .content-column ul li p {
                        font-family: 'Inter', sans-serif;
                        font-size: 16px;
                        font-weight: 400;
                        grid-area: text;
                    }
                
                    .chooseus-section .container .image-column {
            flex: 2;
            text-align: right;
                    }

                    .chooseus-section .container .image-column img {
                width: 645px;
                height: 505px;
                object-fit: contain;
            }

.project-section {
    position: relative;
    z-index: 0;
    padding: 60px 0 0 0;
}

   .project-section .container {
        text-align: center;
   }

   .project-section .container .section-title {
            margin-bottom: 15px;
        }

        .project-section .container h2 {
           font-family: 'DM Sans', sans-serif;
           font-size: 45px;
           font-weight: 700;
           margin-bottom: 75px;
        }
        
        .project-section .container .project-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
        }

        .project-section .container .project-grid .project {
                display: block;
                text-decoration: none;
                color: #191919;
                border: 1px solid rgba(255,255,255,0.1);
                padding: 20px;
                transition: border 0.15s ease-in-out;
        }

        .project-section .container .project-grid .project img {
                    width: 100%;
                    height: 311px;
                    object-fit: cover;
                }

                .project-section .container .project-grid .project  h5 {
                    text-align: left;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    padding: 30px 0 15px 0;
                    border-bottom: 1px solid rgba(25, 25, 25, 0.1);
                 }

                 .project-section .container .project-grid .project p {
                    margin: 20px 20px 0 0;
                    display: flex;
                    justify-content: flex-end;
                    align-items: center;
                    text-decoration: none;
                    font-family:'Inter', sans-serif ;
                    font-size: 14px;
                    font-weight: 500;
                    color: #191919;
                 }

                    .project-section .container .project-grid .project p i {
                        margin-left: 5px;
                    }
            

                    .project-section .container .project-grid .project:hover {
                    border: 1px solid rgba(25, 25, 25, 0.1);
                 }
        

       .project-section .container .all-projects-link {
            display: inline-block;
            margin: 80px 0 100px 0;
        }
    

.team-section {
    background-color: #FeDe92;
    position: relative;
    z-index: 0;
    padding: 60px 0 60px 0;
}

    .team-section .container .section-title {
            margin-bottom: 15px;
        }
        .team-section .container .browse-team {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 40px;
        }

        .team-section .container .browse-team h2 {
                flex: 1;
                font-family: 'Dm Sans', sans-serif;
                font-size: 45px;
                font-weight: 700;
            }
    

            .team-section .container .team-members {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 40px;
            }

            .team-section .container .team-members .member img {
                    height: 420px;
                    width: 387px;
                    object-fit: cover;
                }

                .team-section .container .team-members .member h5 {
                    font-family: 'DM sans', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    margin: 30px 0 0 0;
                }
                .team-section .container .team-members .member p{
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                }

.testimonial-section {
    text-align: center;
    background-color: #F0D082;
    position: relative;
    z-index: 0;
    padding: 60px 0 8px 0;
    padding-bottom: 120px;
}

    .testimonial-section .container .section-border{
        margin: -50px -90px;
        padding: 320px 80px;
        background-color: #FFFFFF;
    }

    .testimonial-section .container .section-border .section-title {
            margin-bottom: 15px;
        }

        .testimonial-section .container .section-border h2 {
            font-family: 'DM Sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
            margin-bottom: 50px;
        }

        .testimonial-section .container .section-border .testimonials {
            display: flex;
            justify-content: space-around;
            align-items: center;
            gap: 100px;
            margin-bottom: 40px;
        }

        .testimonial-section .container .section-border .testimonials .testimonial {
                text-align: left;
        }

        .testimonial-section .container .section-border .testimonials .testemonial .rating {
                    margin: 20px 0;
                    color: #F94D1C;
                }

                .testimonial-section .container .section-border .testimonials .testemonial .writer {
                    text-align: left;
                    align-items: center;
                    display: grid;
                    grid-template-columns: 90px 1fr;
                    grid-template-areas: "img name"
                                          "img position";
                }

                .testimonial-section .container .section-border .testimonials .testemonial .writer img {
                    grid-area: img;
                    border-radius: 50%;
                    height: 70px;
                    width: 70px;
                    object-fit: cover;
                    margin-top: 15px;
                }

                .testimonial-section .container .section-border .testimonials .testemonial .writer h5 {
                    grid-area: name;
                    font-family: 'DM Sans', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    margin: 30px 0 0 0;
                }

                .testimonial-section .container .section-border .testimonials .testemonial .writer p {
                    grid-area: position;
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    color: #F94D1C;
                }
                
                .testimonial-section .container .section-border a {
            display: inline-block;
            margin: 50px 0 0 0;
         }
    
.article-section {
    position: relative;
    z-index: 0;
    padding: 60px 0 60px 0;
}

    .article-section .container .section-title {
            margin-bottom: 15px;
        }
        .article-section.container .browse-news {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-bottom: 40px;
        }

        .article-section.container .browse-news h2 {
                flex: 1;
                font-family: 'DM Sans', sans-serif;
                font-size: 45px;
                font-weight: 700;
            }

            .article-section .container .articles {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 10px;
            margin-top: 40px;
        }

            .article-section .container .articles .article {
                position: relative;
                text-decoration: none;
                color: #191919;
                border: 1px solid rgba(25, 25, 25, 0.1);
                padding: 20px;
                transition: border 0.15s ease-in-out;

                .article-section .container .articles .article .article-date {
                    position: absolute;
                    left: 30px;
                    top: 30px;
                    background-color: #F0D082;
                    height: 64px;
                    width: 56px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;

                    .article-section .container .articles .article .article-date .day {
                        font-family: 'DM Sans', sans-serif;
                        font-size: 22px;
                        font-weight: 700;
                        margin-bottom: 10px;
                    }

                    .article-section .container .articles .article .article-date .month {
                         font-family: 'Inter', sans-serif;
                         font-size: 16px;
                         font-weight: 400;
                    }
                }
                .article-section .container .articles .article img {
                    height: 230px;
                    width: 100%;
                    object-fit: cover;
                }
                .category {
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                    margin-top: 20px;
                }

                .article-section .container .articles .article h5 {
                    font-family: 'DM Sans', sans-serif;
                    font-size: 22px;
                    font-weight: 700;
                    margin-bottom: 20px;
                }

                .article-section .container .articles .article p {
                    font-family: 'Courier New', Inter, sans-serif;
                    font-size: 16px;
                    font-weight: 400;
                }
               
    .article-section .container .articles .article:hover {
                    border: 1px solid rgba(25, 25, 25, 0.1);
                }
            

.newsletter-section {
    position: relative;
    z-index: 0;
    padding: 80px 0;
    background-color: #F0EFE9;
}

.newsletter-section .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
}

.newsletter-section .container h2 {
            flex: 1;
            font-family: 'DM Sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
        }

        .newsletter-section .container form {
            display: flex;
        }

        .newsletter-section .container form input {
                border-radius: 25px;
                padding: 0 20px;
                margin-right: 20px;
                outline: none;
                border: 1px solid rgba(25, 25, 25, 0.1);
            }
        

.pagetitle-section {
    padding: 60px 0 60px 0;
}

.pagetitle-section .container {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
}

.pagetitle-section .container .breadcrumb a {
                color: #191919;
                text-decoration: none;
            }

            .pagetitle-section .container .breadcrumb a:hover {
                    text-decoration: underline;
                }
            
                .pagetitle-section .container .breadcrumb span {
                margin-left: 20px;
                font-weight: 700;
            }
        

            .pagetitle-section .container h2 {
            flex: 1;
            font-family: 'DM Sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
        }


.contactinfo-section {
    padding: 80px 0 0 0 ;
}

.contactinfo-section .container {
        padding: 0;
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 50px;
    }

        .contactinfo-section .container .infobox {
            flex: 1;
            border: 1px solid rgba(25, 25, 25, 0.1);
            padding: 20px 60px;
            display: grid;
            grid-template-columns: 1fr 2fr;
            grid-template-areas: "icon title"
                                 "icon title";
                                }

         .contactinfo-section .container .infobox .black-circle {
            grid-area: icon;
            border-radius: 50%;
            background-color: #191919;
            color: #FFFFFF;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 60px;
            width: 60px;
        }
        .contactinfo-section .container .infobox p {
            margin: 0;
        }
        
.contactform-section {
    padding: 80px 0 0 0;
}

    .contactform-section .container {
        color :#191919;
        background-color: F0EFE9;
        text-align: center;
        padding: 40px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .contactform-section .container h2 {
            font-family:'DM Sans', sans-serif;
            font-size: 45px;
            font-weight: 700;
            width: 40%;
        }
        .contactform-section .container form {
            width: 100%;
            padding: 20px, 100px;
        }

        .contactform-section .container form input {
                display: block;
                border-radius: 25px;
                padding: 0 20px;
                margin-right: 20px;
                outline: none;
                border:1px, solid rgba(25,25,25,0,1);
                padding: 15px 20px;
                margin: 15px 0;
                width: 100%;
            }

            .contactform-section .container form textarea {
                display: block;
                border-radius: 25px;
                padding: 0 20px;
                margin-right: 20px;
                outline: none;
                border: 1px solid rgba(25, 25, 25, 0.1);
                padding: 15px 0;
                width: 100%;
                height: 200px;
                resize: none;
            }

            .contactform-section .container form button {
                margin-top: 20px;
            }
    

googlemaps-section {
    padding: 80px 0 0 0;
}

    googlemaps-section .google-maps {
        width: 100%;
        height: 620px;
        border: none;
    }


footer {
    background-color: #0E1021;
    color: #FFFFFF;
}

    .footer .footer-section {
        position: relative;
        z-index: 0;
        padding: 70px 0;
        border-bottom: 1px solid rgba(135, 135, 144, 0.4);
    }

        .footer .footer-section .container {
            display: grid;
            grid-template-columns: 3fr 2fr 2fr 2fr 2fr;
        }

        .footer .footer-section .container .logo {
                padding-right: 80px;
        }

        .footer .footer-section .container .logo  p {
                    padding-top: 30px;
                }
            
                .footer .footer-section .container h5 {
                font-family: 'DM Sans', sans-serif;
                font-size: 22px;
                font-weight: 700;
            }

            .footer .footer-section .container ul {
                list-style: none;
                padding: 0;
                margin: 0;
            }

            .footer .footer-section .container ul  li {
                    font-family: 'Inter', sans-serif;
                    font-size: 16px;
                    font-weight: 500;
                    margin-top: 10px;
            }

            .footer .footer-section .container ul li a {
                        text-decoration: none;
                        color: #A7A7A7AE;
            }

            .footer .footer-section .container ul li a:hover {
                            text-decoration: underline;
                            color: #FFFFFF;
                        }
                
    .footer .copyright-section {
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        padding: 20px 0;
    }

        .footer .copyright-section .container {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .footer .copyright-section .container .social-media a {
                    color: #FFFFFF;
                    margin-left: 10px;
        }

        .footer .copyright-section .container .social-media a:hover {
                        color: #99999999;
                    }
            

                        