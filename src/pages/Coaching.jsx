// import React from 'react'
// import { Link } from 'react-router-dom'

// const Coaching = () => {
//   const programs = [
//     {
//       title: 'Executive Leadership',
//       description: 'Develop advanced leadership skills for C-suite executives and senior managers.',
//       duration: '6-12 months',
//       sessions: 'Bi-weekly 1:1 coaching',
//       focus: ['Strategic Decision Making', 'Team Leadership', 'Organizational Influence']
//     },
//     {
//       title: 'Career Transition',
//       description: 'Navigate career changes with confidence and strategic planning.',
//       duration: '3-6 months',
//       sessions: 'Weekly 1:1 coaching',
//       focus: ['Career Assessment', 'Job Search Strategy', 'Interview Preparation']
//     },
//     {
//       title: 'Performance Enhancement',
//       description: 'Boost professional performance and achieve peak productivity.',
//       duration: '3-4 months',
//       sessions: 'Weekly 1:1 coaching',
//       focus: ['Goal Setting', 'Time Management', 'Stress Management']
//     },
//     {
//       title: 'Entrepreneur Mindset',
//       description: 'Develop the mindset and skills needed for entrepreneurial success.',
//       duration: '4-8 months',
//       sessions: 'Bi-weekly 1:1 coaching',
//       focus: ['Risk Management', 'Innovation Mindset', 'Work-Life Integration']
//     },
//     {
//       title: 'Communication Mastery',
//       description: 'Enhance communication skills for professional and personal success.',
//       duration: '2-3 months',
//       sessions: 'Weekly 1:1 coaching',
//       focus: ['Public Speaking', 'Negotiation Skills', 'Conflict Resolution']
//     },
//     {
//       title: 'Life Purpose Discovery',
//       description: 'Find clarity and direction in your personal and professional life.',
//       duration: '3-4 months',
//       sessions: 'Bi-weekly 1:1 coaching',
//       focus: ['Values Assessment', 'Purpose Discovery', 'Goal Alignment']
//     }
//   ]

//   const testimonials = [
//     {
//       name: 'Jennifer Park',
//       role: 'Tech Executive',
//       quote: "The leadership coaching transformed how I lead my team. We've seen a 40% increase in team satisfaction.",
//       improvement: 'Team Satisfaction'
//     },
//     {
//       name: 'Marcus Thompson',
//       role: 'Career Changer',
//       quote: "Transitioning from corporate to entrepreneurship was daunting. My coach provided the clarity and confidence I needed.",
//       improvement: 'Career Confidence'
//     },
//     {
//       name: 'Sarah Williams',
//       role: 'Marketing Director',
//       quote: "Work-life balance was a constant struggle. Coaching helped me establish boundaries and increase productivity.",
//       improvement: 'Work-Life Balance'
//     }
//   ]

//   const methodologies = [
//     {
//       name: 'GROW Model',
//       description: 'Goal, Reality, Options, Will - A structured framework for goal achievement',
//       icon: '🎯'
//     },
//     {
//       name: 'Positive Psychology',
//       description: 'Focus on strengths and positive outcomes rather than problems',
//       icon: '🌟'
//     },
//     {
//       name: 'Cognitive Behavioral',
//       description: 'Identify and change limiting thought patterns and behaviors',
//       icon: '🧠'
//     },
//     {
//       name: 'Solution-Focused',
//       description: 'Concentrate on solutions and desired outcomes rather than problems',
//       icon: '💡'
//     }
//   ]

//   return (
//     <>
//       {/* Hero */}
//       <section className="relative overflow-hidden section-padding bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="container-custom">
//           <div className="grid lg:grid-cols-2 gap-12 items-center">
//             <div>
//               <h1 className="text-4xl md:text-5xl font-[family-name:Playfair_Display] font-bold mb-6">
//                 Life <span className="gradient-text">Coaching</span>
//               </h1>
//               <p className="text-xl text-gray-600 mb-8">
//                 Transformational personal development programs designed to unlock potential, enhance leadership capabilities, and align mindset with professional goals for lasting success.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4">
//                 <Link to="/contact" className="btn-primary">
//                   Start Your Journey
//                 </Link>
//                 <a href="#programs" className="btn-outline">
//                   View Programs
//                 </a>
//               </div>
//             </div>
//             <div className="bg-white rounded-2xl p-8 shadow-xl">
//               <div className="text-4xl mb-6">🧠</div>
//               <h3 className="text-2xl font-semibold mb-4">Why Coaching Works</h3>
//               <ul className="space-y-4">
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
//                     ✓
//                   </div>
//                   <span>Structured approach to personal growth</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
//                     ✓
//                   </div>
//                   <span>Accountability for consistent progress</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
//                     ✓
//                   </div>
//                   <span>Evidence-based methodologies</span>
//                 </li>
//                 <li className="flex items-center">
//                   <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 mr-4">
//                     ✓
//                   </div>
//                   <span>Customized to your unique needs</span>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Who It's For */}
//       <section className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="max-w-3xl mx-auto text-center mb-16">
//             <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-6">Who Benefits From Coaching?</h2>
//             <p className="text-xl text-gray-600">
//               Our coaching services are designed for professionals at all levels who want to achieve more, overcome challenges, and find greater fulfillment.
//             </p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: '👔',
//                 title: 'Executives & Leaders',
//                 description: 'Enhance leadership capabilities, strategic thinking, and team management skills.'
//               },
//               {
//                 icon: '🎓',
//                 title: 'Career Professionals',
//                 description: 'Navigate career transitions, overcome plateaus, and achieve professional goals.'
//               },
//               {
//                 icon: '🚀',
//                 title: 'Entrepreneurs',
//                 description: 'Develop the mindset and skills needed to build and scale successful businesses.'
//               }
//             ].map((item, index) => (
//               <div key={index} className="text-center">
//                 <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center mx-auto mb-6">
//                   <span className="text-3xl">{item.icon}</span>
//                 </div>
//                 <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
//                 <p className="text-gray-600">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Methodologies */}
//       <section className="section-padding bg-gray-50">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Our Coaching Methodologies</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Evidence-based approaches combined with practical application for real-world results
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {methodologies.map((method, index) => (
//               <div key={index} className="bg-white rounded-xl p-6 text-center">
//                 <div className="text-4xl mb-4">{method.icon}</div>
//                 <h3 className="text-lg font-semibold mb-3">{method.name}</h3>
//                 <p className="text-gray-600 text-sm">{method.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Programs */}
//       <section id="programs" className="section-padding bg-white">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Coaching Programs</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Structured programs designed for specific growth objectives and professional needs
//             </p>
//           </div>
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {programs.map((program, index) => (
//               <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 card-hover">
//                 <h3 className="text-xl font-semibold mb-4">{program.title}</h3>
//                 <p className="text-gray-600 mb-6">{program.description}</p>
//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <div className="text-sm text-gray-500">Duration</div>
//                     <div className="font-semibold">{program.duration}</div>
//                   </div>
//                   <div>
//                     <div className="text-sm text-gray-500">Sessions</div>
//                     <div className="font-semibold">{program.sessions}</div>
//                   </div>
//                 </div>
//                 <div>
//                   <div className="text-sm text-gray-500 mb-3">Focus Areas</div>
//                   <ul className="space-y-2">
//                     {program.focus.map((area, idx) => (
//                       <li key={idx} className="flex items-center text-gray-700">
//                         <svg className="w-4 h-4 text-primary-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                         </svg>
//                         {area}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//                 <Link
//                   to="/contact"
//                   className="block text-center mt-8 btn-outline w-full"
//                 >
//                   Learn More
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="section-padding bg-gradient-to-br from-purple-50 to-pink-50">
//         <div className="container-custom">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl font-[family-name:Playfair_Display] font-bold mb-4">Client Transformations</h2>
//             <p className="text-gray-600">Hear from professionals who transformed their lives through coaching</p>
//           </div>
//           <div className="grid md:grid-cols-3 gap-8">
//             {testimonials.map((testimonial, index) => (
//               <div key={index} className="bg-white rounded-xl p-8">
//                 <div className="flex items-center mb-6">
//                   <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-semibold mr-4">
//                     {testimonial.name.split(' ').map(n => n[0]).join('')}
//                   </div>
//                   <div>
//                     <div className="font-semibold">{testimonial.name}</div>
//                     <div className="text-gray-600 text-sm">{testimonial.role}</div>
//                   </div>
//                 </div>
//                 <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
//                 <div className="border-t border-gray-200 pt-6">
//                   <div className="text-sm text-gray-500">Key Improvement</div>
//                   <div className="font-semibold text-primary-600">{testimonial.improvement}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA */}
//       <section className="section-padding bg-gradient-to-r from-purple-600 to-pink-600">
//         <div className="container-custom">
//           <div className="max-w-4xl mx-auto text-center text-white">
//             <h2 className="text-3xl md:text-4xl font-[family-name:Playfair_Display] font-bold mb-6">
//               Ready to Transform Your Life?
//             </h2>
//             <p className="text-xl mb-8 opacity-90">
//               Take the first step toward personal and professional transformation.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/contact" className="btn-primary bg-white text-primary-600 hover:bg-gray-100 px-8 py-4 text-lg">
//                 Book Discovery Session
//               </Link>
//               <Link to="/services" className="btn-outline border-white text-white hover:bg-white/10 px-8 py-4 text-lg">
//                 View All Services
//               </Link>
//             </div>
//             <p className="mt-8 text-white/80 text-sm">
//               Free 30-minute discovery session • No obligation • Confidential consultation
//             </p>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }

// export default Coaching