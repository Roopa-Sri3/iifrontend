/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions*/
import React, { useState } from 'react';
import SubHeader from './SubHeader';
import SubLayout from './SubLayout';
import SubFooter from './SubFooter';
import './Dashboard.css';
import FilterComponent from '../assets/svgs/filterImage';
import FeedbackModal from '../components/modals/feedbackModal/FeedbackModal';
import DropDownMenu from '../components/core/DropDownMenu/DropDownMenu';

const Dashboard = () => {
  const [candidates] = useState([
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '1',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Pending',
      report: 'No Report',
      feedback: '2',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Pending',
      report: 'No Report',
      feedback: '3',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'New',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '3',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '3',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Pending',
      report: 'No Report',
      feedback: '2',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisting',
      report: 'No Report',
      feedback: '5',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Pending',
      report: 'No Report',
      feedback: '3',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '3',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '3',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisting',
      report: 'No Report',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },

    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    },
    {
      candidateName: 'Moksha',
      techSkills: 'Java',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '5',
    },
    {
      candidateName: 'Nirvaan',
      techSkills: 'Ruby',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Anika',
      techSkills: 'React, Node.js',
      status: 'Shortlisted',
      report: 'No Report',
      feedback: '4',
    },
    {
      candidateName: 'Aashrith',
      techSkills: 'Python',
      status: 'Completed',
      report: '16543468.pdf',
      feedback: '1',
    }
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);
  const [filteredCandidates, setFilteredCandidates] = useState(candidates);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Fetch candidates from the backend on component mount
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('http://your-backend-url/candidates');
  //       if (!response.ok) {
  //         throw new Error('Network response was not ok');
  //       }
  //       const data = await response.json();
  //       setCandidates(data);
  //     } catch (error) {
  //       console.error('There has been a problem with your fetch operation:',
  //         error);
  //     }
  //   };

  //   fetchData();
  // }, []);
  // Empty dependency array this will only run once after the initial render

  // Calculate the total number of pages
  const totalPages = Math.ceil(filteredCandidates.length / recordsPerPage);

  // Calculate the current items to display
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  const currentRecords = filteredCandidates.slice(indexOfFirstRecord,
    indexOfLastRecord);

  // const totalRecords = totalPages * recordsPerPage;
  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = (selectedOptions) => {
    const filteredCandidates = candidates.filter((candidate) => {
      for (const option in selectedOptions) {
        if (selectedOptions[option] && candidate.status === option) {
          return true;
        }
      }
      return false;
    });
    setFilteredCandidates(filteredCandidates);
    setIsFilterOpen(false);
  };

  const handleFilterToggle = () => {
    setIsFilterOpen((prevState) => !prevState);
  };

  const headerActions =
  [null,
    null,
    // <FilterComponent key="filter-status" className="filter-icon"/>,
    <div
      key="filter-status"
      className={`filter-icon ${isFilterOpen ? 'filter-icon-open' : ''}`}
    >
      <FilterComponent onClick={handleFilterToggle} />
      {isFilterOpen && (
        <div className="filter-dropdown">
          <DropDownMenu
            options={['Pending', 'Expired', 'Completed', 'New']}
            onOptionChange={handleFilterChange}
          />
        </div>
      )}
    </div>,
    null, null, null];

  return (
    <div className="dashboard">
      <div className="card">
        <table>
          <SubHeader columns={['Candidate Name',
            'Tech Skills',
            'Status',
            'View/Dashboard Report',
            'Feedback',
            'Actions']}
          headerActions={headerActions} />
          <SubLayout data={currentRecords} />
        </table>
        <SubFooter
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
        <FeedbackModal />
      </div>
    </div>
  );
};

export default Dashboard;
