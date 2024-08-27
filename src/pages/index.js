import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';


export default function Home() {
     const {siteConfig} = useDocusaurusContext();
     return (

          <Layout title={`Hello from ${siteConfig.title}`} description="Description will go into a meta tag in <head />">

               <main className="front_landing">

                    <div className="front_header">

                         <h1 className="front_header_title">Kadena Documentation</h1>

                         <span className="front_header_excerpt">Wecome to our enterprise developer docs, a comprehensive resource for building with our blockchain. Here, you'll find everything you need to accelerate your development process, from API references to best practices and detailed tutorials.</span>

                         <a className="kadena-button-cta front_header_cta" href="./developers/get-started">Get Started</a>

                    </div>

                    <div className="front_main">

                         <ul className="front_main_options">

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./start">Quick start</a>

                                   <span className="front_main_option_summary">Start here to set up your development environment and build your first project.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./developers">Developers</a>

                                   <span className="front_main_option_summary">If you want to write smart contracts to run on the Kadena blockchain, the best place to start is by learning the Pact smart contract programming language. 
                                   Pact helps you write transactional logic that optimizes performance, security, data management, and workflow.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./api">API</a>

                                   <span className="front_main_option_summary">Connect to API endpoints to interact with the Kadena blockchain network and Chainweb nodes.</span>

                              </li>


                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./guides">How-to guides</a>

                                   <span className="front_main_option_summary">Step-by-step instructions to offer clear and actionable insights to enhance your development experience.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./consensus">Proof-of-Work consensus</a>

                                   <span className="front_main_option_summary">The backbone of the Kadena blockchain is the Proof-of-Work Chainweb consensus protocol that runs on the computers in the network.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./resources">Solution showcase</a>

                                   <span className="front_main_option_summary">Explore a curated collection of tools, products, and resources to deepen your knowledge and engagement with Kadena blockchain technology.</span>

                              </li>

                         </ul>

                    </div>

               </main>

          </Layout>

     );
}