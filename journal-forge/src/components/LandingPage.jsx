import React from "react"

const LandingPage = () =>{
    return(
        <>
            <img className="bg" src="../imgs/bg.jpg" alt="bg" />

        <div className="firstpage">
            
        <div className="navbar">
            <span className="logo">JF</span>
            <div class="search">
        <input type="text" className="input" placeholder="Search here"></input>
        <a href="#" className="publish">Publish</a>
        </div>
            
            <div className="links">
            <a href="#" className="navlinks">Home</a>
            <a href="#" className="navlinks">About</a>
            <a href="#" className="navlinks">Journals</a>
            </div>
            <a href="#" className="profilebtn">Profile</a>
        </div>

        <div className="welcome">
            <div className="indexone">
            <p className="firstline">Welcome</p>
            <p className="secondline">To JournalForge</p>
            <p className="thirdline">Where Knowledge Meets Discovery</p>
            </div>
            <br/>
            <p className="fourthline">Join a Global Community of Scholars and innovators in Pushing the Boundaries of Knowledge</p>
            <br/>
            <a href="#" className="explorebtn">Start Exploring</a>
        </div>
        </div>

        <div className="secondpage">
            <div>
            <p className="abouthead">About Us</p>
            <p className="aboutcontent">At JournalForge, Our Mission Is To Empower Researchers, Scholars, And Practitioners Worldwide By Providing A Dynamic Platform For The Exchange Of Ideas And The Publication Of High-Quality, Peer-Reviewed Articles. We Are Committed To Fostering Academic Excellence, Promoting Interdisciplinary Collaboration, And Driving Innovation Forward.</p>
            <ul className="values">
                <span>Our Values</span>
                <li>Excellence</li>
                <li>Inclusivity</li>
                <li>Collaboration</li>
                <li>Accessibility</li>
            </ul>
            </div>
        </div>
        <br/>

        <h1 className="phead">Popular Journals</h1>
        <br/>
        <div className="card">
        <div className="popularjournals">
        <div>
            <img className="jimg" src="../imgs/journal-1.jpg" alt="jimg1"/>
            </div>
            <div className="journals-content">
            <h4 className="phead">Journal Of Interdisciplinary Studies</h4>
            <br/>
            <br/>
            <div className="pcontent">
            <p>This Journal Publishes Reasearch thqt Transcends Disciplinary Boundaries, Foastering Collaboration And Innovation Across Diverse Fields of Study.</p>
            <br/>
            <p>Topics include Interdisciplinary Approaches to Solving Complex Societal Challenges, intergrating insights From Multiple Disciplines to Advance Knowledge and Understanding.</p>
            </div>
            <button className="pexplore-btn">Explore</button>
            
        </div>
        </div>
        
        
        <div className="popularjournals">
        <div>
            <img className="jimg" src="../imgs/journal-2.jpg" alt="jimg2"/>
            </div>
            <div className="journals-content">
            <h4 className="phead">International Journal Of Educational Research</h4>
            <br/>
            <br/>
            <div className="pcontent">
            <p>A leading journal in the field of education, this publication features empirical research, theoretical studies, and critical analyses exploring various aspects of teaching, learning, and educational policy.</p>
            <br/>
            <p>Topics cover curriculum development, pedagogical methods, educational psychology, assessment, and educational technology.</p>
            </div>
            <button className="pexplore-btn">Explore</button>
        </div>
        </div>
        </div>


        <div className="footer">
            <div className="flinks">
            <a href="#">Home</a>
            <a href="#">About us</a>
            <a href="#">Contact</a>
            </div>
           
        </div>
        </>
    )
}

export default LandingPage;