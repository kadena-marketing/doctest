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

                         <h1 className="front_header_title">Kadena Developer Documentation</h1>

                         <span className="front_header_excerpt">Welcome to Kadena developer-focused documentation. Kadena Developer Docs provide everything you need to start building for the Kadena blockchain, accelerate your development process, and deploy your applications on the Kadena network. From introductory tutorials to comprehensive API documentation, we've got you covered.</span>

                         <a className="kadena-button-cta front_header_cta" href="./developers">Get started</a>

                    </div>

                    <div className="front_main">

                         <ul className="front_main_options">

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./start">Quick start</a>

                                   <span className="front_main_option_summary">Start here to set up your development environment and build your first project.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./developers">Smart contract developers</a>

                                   <span className="front_main_option_summary">Learn how to write smart contracts using the Pact smart contract programming language. </span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./api">API reference</a>

                                   <span className="front_main_option_summary">Connect to API endpoints to interact with smart contracts and the Kadena blockchain network.</span>

                              </li>


                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./guides">How-to guides</a>

                                   <span className="front_main_option_summary">Follow the examples in the How-to guides to learn patterns for how to perform common tasks.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./reference/builtin-functions">Function reference</a>

                                   <span className="front_main_option_summary">Get fast access to Pact built-in functions to perform many types of common programming tasks.</span>

                              </li>

                              <li className="kadena-link-box front_main_option">

                                   <a className="front_main_option_title" href="./resources">Solution showcase</a>

                                   <span className="front_main_option_summary">Explore a curated collection of tools and resources that highlight building with Kadena blockchain technology.</span>

                              </li>
                         </ul>
                    </div>

<hr>
</hr>
                   <div className="front_main">

                        <ul className="front_main_options">

                              <li className="kadena-link-box front_main_option">

                                  <a className="front_main_option_title" href="./consensus">Proof-of-Work consensus</a>

                                  <span className="front_main_option_summary">Learn about the Proof-of-Work consensus protocol that powers the Kadena network and how to become a node operator or miner.</span>

                              </li>
                              <li className="kadena-link-box front_main_option">

                                  <a className="front_main_option_title" href="./academy">Academy resources</a>

                                  <span className="front_main_option_summary">Browse modules and take courses to build your skill set using video demos, hands-on exercises, and sample projects.</span>

                              </li>
                              <li className="kadena-link-box front_main_option">

                                  <a className="front_main_option_title" href="./community">Community resources</a>

                                  <span className="front_main_option_summary">See what the community is up to and how to contribute.</span>

                              </li>
                         </ul>

                    </div>

               </main>

          </Layout>

     );
}