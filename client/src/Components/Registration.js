import React, { Component } from 'react';
import '../App.css';
import remove from "../Images/remove.svg";
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';
import { connect } from "react-redux";
import { registerUser } from "../Actions/authActions";
import classnames from 'classnames';

class Registration extends Component {
    constructor(props){
        super(props);
        this.state = {
            username:"",
            email:"",
            password:"",
            password2:"",
            errors: {},
            toggleTerms:false,
            secondPasswordWrong:false
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.toggleTermsAndCondtiions = this.toggleTermsAndCondtiions.bind(this);
        this.prevent = this.prevent.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({ errors: nextProps.errors });
        }
    }

    toggleTermsAndCondtiions(){
        this.setState({
            toggleTerms:!this.state.toggleTerms
        })
    }

    componentDidMount(){
        if(this.props.auth.isAuthenticated){
            this.props.history.push("/home")
        }
    }

    onChange(event){
        this.setState({
            [ event.target.name ]: event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
        };
        if(this.state.password2 === this.state.password) {
            this.props.registerUser(newUser, this.props.history);
        }
    }

    prevent(e){
        e.stopPropagation();
    }


    render() {
        const {errors} = this.state;

        return (
            <div className="registration-page">
                <div className="registration-container">
                    <div className="registration-content-left">
                        <h1>IZRADI SVOJ JEDINSTVENI RAČUN ZA SKRIPTE</h1>
                    </div>
                    <div className="registration-paper">
                        <div className="registration-form">
                            <form onSubmit={this.onSubmit}>
                                <label>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.username
                                            })}
                                        >
                                            Korisničko ime:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.username
                                            })}
                                            type="text"
                                            name="username"
                                            maxLength="20"
                                            value={this.state.username}
                                            onChange={this.onChange}
                                        />
                                        {errors.username ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.username}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.email
                                            })}
                                        >
                                            Email:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.email
                                            })}
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.onChange}
                                        />
                                        {errors.email ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.email}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'shake make-red' : errors.password
                                            })}
                                        >
                                            Lozinka:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid shake' : errors.password
                                            })}
                                            type="password"
                                            name="password"
                                            value={this.state.password}
                                            onChange={this.onChange}
                                        />
                                        {errors.password ? <div className="incorrect-message-container"><p className="incorrect-message">{errors.password}</p></div> : null}
                                    </div>
                                    <div className="label">
                                        <h3
                                            className={classnames('',{
                                                'make-red' : this.state.password !== this.state.password2
                                            })}
                                        >
                                            Ponovi lozinku:
                                        </h3>
                                        <input
                                            className={classnames('registration-inputs',{
                                                'is-invalid' : this.state.password !== this.state.password2
                                            })}
                                            type="password"
                                            name="password2"
                                            value={this.state.password2}
                                            onChange={this.onChange}
                                        />
                                    </div>
                                    <input type="checkbox" name="vehicle1" value="Bike" required/><label>Prihvaćam <span className="terms" onClick={this.toggleTermsAndCondtiions}>Uvjete</span></label>
                                </label>
                                <div className="register-buttons-container">
                                    <button type="submit" className="buttons-register button-registriraj-se">REGISTRIRAJ SE</button>
                                    <span className="button-seperator">ili</span>
                                    <Link to="/login"><button className="buttons-register button-prijavi-se">PRIJAVA</button></Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {this.state.toggleTerms ?
                    <div onClick={this.toggleTermsAndCondtiions} className="terms-and-conditions-container">
                        <div onClick={((e) => this.prevent(e))} className="terms-and-conditions">
                            <h1>Terms and conditions</h1>

                            <p>These terms and conditions ("Terms", "Agreement") are an agreement between Website Operator ("Website Operator", "us", "we" or "our") and you ("User", "you" or "your"). This Agreement sets forth the general terms and conditions of your use of the skripte.com website and any of its products or services (collectively, "Website" or "Services").</p>

                            <h2>Accounts and membership</h2>

                            <p>If you create an account on the Website, you are responsible for maintaining the security of your account and you are fully responsible for all activities that occur under the account and any other actions taken in connection with it. Providing false contact information of any kind may result in the termination of your account. You must immediately notify us of any unauthorized uses of your account or any other breaches of security. We will not be liable for any acts or omissions by you, including any damages of any kind incurred as a result of such acts or omissions. We may suspend, disable, or delete your account (or any part thereof) if we determine that you have violated any provision of this Agreement or that your conduct or content would tend to damage our reputation and goodwill. If we delete your account for the foregoing reasons, you may not re-register for our Services. We may block your email address and Internet protocol address to prevent further registration.</p>

                            <h2>User content</h2>

                            <p>We do not own any data, information or material ("Content") that you submit on the Website in the course of using the Service. You shall have sole responsibility for the accuracy, quality, integrity, legality, reliability, appropriateness, and intellectual property ownership or right to use of all submitted Content. We may, but have no obligation to, monitor Content on the Website submitted or created using our Services by you. Unless specifically permitted by you, your use of the Website does not grant us the license to use, reproduce, adapt, modify, publish or distribute the Content created by you or stored in your user account for commercial, marketing or any similar purpose. But you grant us permission to access, copy, distribute, store, transmit, reformat, display and perform the Content of your user account solely as required for the purpose of providing the Services to you. Without limiting any of those representations or warranties, we have the right, though not the obligation, to, in our own sole discretion, refuse or remove any Content that, in our reasonable opinion, violates any of our policies or is in any way harmful or objectionable.</p>

                            <h2>Backups</h2>

                            <p>We are not responsible for Content residing on the Website. In no event shall we be held liable for any loss of any Content. It is your sole responsibility to maintain appropriate backup of your Content. Notwithstanding the foregoing, on some occasions and in certain circumstances, with absolutely no obligation, we may be able to restore some or all of your data that has been deleted as of a certain date and time when we may have backed up data for our own purposes. We make no guarantee that the data you need will be available.</p>

                            <h2>Prohibited uses</h2>

                            <p>In addition to other terms as set forth in the Agreement, you are prohibited from using the Website or its Content: (a) for any unlawful purpose; (b) to solicit others to perform or participate in any unlawful acts; (c) to violate any international, federal, provincial or state regulations, rules, laws, or local ordinances; (d) to infringe upon or violate our intellectual property rights or the intellectual property rights of others; (e) to harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate based on gender, sexual orientation, religion, ethnicity, race, age, national origin, or disability; (f) to submit false or misleading information; (g) to upload or transmit viruses or any other type of malicious code that will or may be used in any way that will affect the functionality or operation of the Service or of any related website, other websites, or the Internet; (h) to collect or track the personal information of others; (i) to spam, phish, pharm, pretext, spider, crawl, or scrape; (j) for any obscene or immoral purpose; or (k) to interfere with or circumvent the security features of the Service or any related website, other websites, or the Internet. We reserve the right to terminate your use of the Service or any related website for violating any of the prohibited uses.</p>

                            <h2>Intellectual property rights</h2>

                            <p>This Agreement does not transfer to you any intellectual property owned by Website Operator or third-parties, and all rights, titles, and interests in and to such property will remain (as between the parties) solely with Website Operator. All trademarks, service marks, graphics and logos used in connection with our Website or Services, are trademarks or registered trademarks of Website Operator or Website Operator licensors. Other trademarks, service marks, graphics and logos used in connection with our Website or Services may be the trademarks of other third-parties. Your use of our Website and Services grants you no right or license to reproduce or otherwise use any Website Operator or third-party trademarks.</p>

                            <h2>Limitation of liability</h2>

                            <p>To the fullest extent permitted by applicable law, in no event will Website Operator, its affiliates, officers, directors, employees, agents, suppliers or licensors be liable to any person for (a): any indirect, incidental, special, punitive, cover or consequential damages (including, without limitation, damages for lost profits, revenue, sales, goodwill, use or content, impact on business, business interruption, loss of anticipated savings, loss of business opportunity) however caused, under any theory of liability, including, without limitation, contract, tort, warranty, breach of statutory duty, negligence or otherwise, even if Website Operator has been advised as to the possibility of such damages or could have foreseen such damages. To the maximum extent permitted by applicable law, the aggregate liability of Website Operator and its affiliates, officers, employees, agents, suppliers and licensors, relating to the services will be limited to an amount greater of one dollar or any amounts actually paid in cash by you to Website Operator for the prior one month period prior to the first event or occurrence giving rise to such liability. The limitations and exclusions also apply if this remedy does not fully compensate you for any losses or fails of its essential purpose.</p>

                            <h2>Indemnification</h2>

                            <p>You agree to indemnify and hold Website Operator and its affiliates, directors, officers, employees, and agents harmless from and against any liabilities, losses, damages or costs, including reasonable attorneys' fees, incurred in connection with or arising from any third-party allegations, claims, actions, disputes, or demands asserted against any of them as a result of or relating to your Content, your use of the Website or Services or any willful misconduct on your part.</p>

                            <h2>Severability</h2>

                            <p>All rights and restrictions contained in this Agreement may be exercised and shall be applicable and binding only to the extent that they do not violate any applicable laws and are intended to be limited to the extent necessary so that they will not render this Agreement illegal, invalid or unenforceable. If any provision or portion of any provision of this Agreement shall be held to be illegal, invalid or unenforceable by a court of competent jurisdiction, it is the intention of the parties that the remaining provisions or portions thereof shall constitute their agreement with respect to the subject matter hereof, and all such remaining provisions or portions thereof shall remain in full force and effect.</p>

                            <h2>Dispute resolution</h2>

                            <p>The formation, interpretation, and performance of this Agreement and any disputes arising out of it shall be governed by the substantive and procedural laws of Istra, Croatia without regard to its rules on conflicts or choice of law and, to the extent applicable, the laws of Croatia. The exclusive jurisdiction and venue for actions related to the subject matter hereof shall be the state and federal courts located in Istra, Croatia, and you hereby submit to the personal jurisdiction of such courts. You hereby waive any right to a jury trial in any proceeding arising out of or related to this Agreement. The United Nations Convention on Contracts for the International Sale of Goods does not apply to this Agreement.</p>

                            <h2>Changes and amendments</h2>

                            <p>We reserve the right to modify this Agreement or its policies relating to the Website or Services at any time, effective upon posting of an updated version of this Agreement on the Website. When we do, we will post a notification on the main page of our Website. Continued use of the Website after any such changes shall constitute your consent to such changes. Policy was created with WebsitePolicies.com</p>

                            <h2>Acceptance of these terms</h2>

                            <p>You acknowledge that you have read this Agreement and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Agreement. If you do not agree to abide by the terms of this Agreement, you are not authorized to use or access the Website and its Services.</p>

                            <h2>Contacting us</h2>

                            <p>If you have any questions about this Agreement, please contact us.</p>

                            <p>This document was last updated on February 18, 2019</p>

                            <img src={remove} onClick={this.toggleTermsAndCondtiions} alt="close terms and conditions" title="close" className="close-terms"/>
                        </div>
                    </div>
                :null}
            </div>
        );
    }
}

Registration.propTypes = {
    registerUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
});

export default withRouter(connect(mapStateToProps, { registerUser })(Registration));
