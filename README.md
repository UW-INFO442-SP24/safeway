# Introduction 
Our project focuses on improving the safety of children commuting to and from school in Seattle, aligning with the UN's Sustainable Cities and Communities goal. We're creating a website where parents of elementary school students can connect to organize group walks, ensuring kids have a safe and sustainable way to get to school. Join us in building a stronger, more secure community for our children's daily commute.

Sneak Peek of our pages:
* Home Page: Our home page includes a short pitch of SafeWay, with our partnership schools on our platform. We seek to expand our school partnership network for the future of SafeWay.
* Event Page: Our event page includes boxes for each event, filters for schools, a join button, and a message form.
* Resource Page: Our resource pages encompass responsive YouTube media, mission cards with SafeWay core values, and added user reviews. 
* We will be using HTML, CSS, and JavaScript to draft, style, and structure our project.

# Background Information
The SDG that we will be focusing on is Sustainable Cities and Communities. According to the UN website, this SDG focuses on how to make cities “inclusive, safe, resilient and sustainable.” The website suggests that we form a vision for our buildings, neighborhoods, and cities and then proceed to act upon that vision. The idea of making cities safer relates to our project idea, in which we will be focusing on prioritizing the safety of children, especially younger children whose safety may be at risk as they commute to school. 

# How Might We Question
***"How might we improve the safety of children commuting to and from school in Seattle?"***

# About Our Solution
Our solution is a website catered to the parents of elementary school-aged students in Seattle. Due to safety concerns, parents may not feel comfortable allowing their younger children to walk to/from school alone. Our website will offer parents who may not have the capacity to walk their students to/from school every day the opportunity to find other parents who are willing to walk a group of students to/from school. Through our solution, we seek to create a safe and sustainable commuting community for elementary school-aged students.

# User Personas
![Persona - Sarah](https://github.com/UW-INFO442-SP24/safeway/assets/114948243/ad93c0c2-aa73-4aab-86b2-bcd32bb5eb01)
![Persona - Jack](https://github.com/UW-INFO442-SP24/safeway/assets/114948243/b754edd0-4bff-4727-a8c2-4c7d3df24490)

# Key Features
* Event Page: Our event page will include a search bar, boxes for each event, filters, a create an event button, a join button, and a color-changing feature based on how many spots are left in each event.
* Event Box: The event box will include information about each event including location, how many spots are left, and the join button. We will specifically be using JS to create flexboxes for our events.
Filters: The filter feature will be used to look up a school for efficiency. After filtering out events by school, the event box will display more details about the guardian, the number of spots left, contact information, etc. 
* Join Button: Integrated into each Event Box for user registration. The number of spots filled will increase by 1 whenever the join button is clicked.
Number of Spots Left: The number of spots left will decrease by 1 every time the join button is clicked.
* Contact Form: Users will be able to send a message to SafeWay team if manually add their email address through the EmailJS platform with API info added to our contact form in the HeaderFooter.js file (within the footer session).

# Testing Protocol
|                               | Feature 1: Contact Form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Feature 2: Filter                                                                                                                                                                                                                                                                                                                                                 | Feature 3: Join                                                                                                                                                                                                                                                                                                                            |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Requirement Specification** | The app has a contact form feature in the footer. This allows users to put their email address and a message they want to send in the input fields.                                                                                                                                                                                                                                                                                                                                                                                                                                        | Users are able to filter through selection options. This enables users to conveniently select filters such as by school.  The dashboard will display the desired event reflecting the selected categories immediately.                                                                                                                                            | The join feature allows users to able to Join the existing walking group from the dashboard. Users would be able to sign up and receive a green checkmark as a result of a successful reservation.                                                                                                                                         |
| **Expected Results**          | 1. When the send button is clicked, users should receive search messages according to their actions. For example, if they don't write a valid email address, it will show an error message of "Please include @ in the field" or "Please fill out this field" if the input field is empty.2. The contact form does not work fully. It only works when manually added through the EmailJS platform (https\://www\.emailjs.com/) function However, the form, provides a response quickly, with an error message that tells users "Message fails to send." This replaces its prior loading error. | 1. When a filter option is clicked and provides a response, only events associated with the selected filter option are displayed, while other events are hidden 2. If all filter options are selected, all items are displayed, and no items are hidden. 3. Only events that are currently open are displayed, the closed or unavailable events should be hidden. | 1. The join button is clicked and provides a response, and a green check mark shows up as a result of successful registration. (shows that the participants 2. The event's attendance list or participant count is updated to reflect the user's registration. This allows users to practice accurate planning and organization for the event. |

During testing with various groups in class, we did not encounter any features that ran into bugs. Additionally, we addressed a previous loading error by integrating a third-party platform (EmailJS) and downloading the necessary package. As a result, we did not include a workaround session in our testing protocol.

# Group Members
* Dorothy Clement
* Vicky Huang
* Chloe Song
* Dexin Sun
* Steven Yang
