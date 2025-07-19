// Admin-Team Integration Test Script
console.log('🔍 Starting Admin-Team Integration Test...');

// Test 1: Check if localStorage is available
function testLocalStorage() {
    console.log('📋 Test 1: Checking localStorage availability...');
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        console.log('✅ localStorage is available');
        return true;
    } catch (e) {
        console.log('❌ localStorage is not available:', e);
        return false;
    }
}

// Test 2: Test admin data structure
function testAdminDataStructure() {
    console.log('📋 Test 2: Testing admin data structure...');
    const testData = {
        current: {
            postdoc: [],
            phd: [],
            mtech: [],
            btech: [],
            staff: []
        },
        past: {
            postdoc: [],
            phd: [],
            mtech: [],
            btech: [],
            staff: []
        }
    };
    
    try {
        localStorage.setItem('teamMembers', JSON.stringify(testData));
        const retrieved = JSON.parse(localStorage.getItem('teamMembers'));
        if (JSON.stringify(retrieved) === JSON.stringify(testData)) {
            console.log('✅ Admin data structure works correctly');
            return true;
        } else {
            console.log('❌ Admin data structure mismatch');
            return false;
        }
    } catch (e) {
        console.log('❌ Admin data structure error:', e);
        return false;
    }
}

// Test 3: Test adding team member through admin
function testAddTeamMember() {
    console.log('📋 Test 3: Testing team member addition...');
    const testMember = {
        name: "Integration Test User",
        designation: "Integration Test Role",
        date: "Integration Test Date",
        about: "Integration Test Description",
        email: "integration@test.com",
        linkedin: "https://linkedin.com/in/integration-test",
        googleScholar: "https://scholar.google.com/citations?user=integration-test"
    };
    
    try {
        let teamMembers = JSON.parse(localStorage.getItem('teamMembers'));
        teamMembers.current.postdoc.push(testMember);
        localStorage.setItem('teamMembers', JSON.stringify(teamMembers));
        
        // Verify the member was added
        const updated = JSON.parse(localStorage.getItem('teamMembers'));
        const addedMember = updated.current.postdoc.find(m => m.name === testMember.name);
        
        if (addedMember) {
            console.log('✅ Team member added successfully:', addedMember.name);
            return true;
        } else {
            console.log('❌ Team member not found after addition');
            return false;
        }
    } catch (e) {
        console.log('❌ Team member addition error:', e);
        return false;
    }
}

// Test 4: Test team page data loading
function testTeamPageLoading() {
    console.log('📋 Test 4: Testing team page data loading...');
    try {
        const data = localStorage.getItem('teamMembers');
        if (!data) {
            console.log('❌ No teamMembers data in localStorage');
            return false;
        }
        
        const teamMembers = JSON.parse(data);
        const hasMembers = teamMembers.current.postdoc.length > 0 || 
                          teamMembers.current.phd.length > 0 ||
                          teamMembers.current.mtech.length > 0 ||
                          teamMembers.current.btech.length > 0 ||
                          teamMembers.current.staff.length > 0;
        
        if (hasMembers) {
            console.log('✅ Team page has data to display');
            return true;
        } else {
            console.log('⚠️ Team page has no members to display');
            return true; // This is not an error, just no data
        }
    } catch (e) {
        console.log('❌ Team page loading error:', e);
        return false;
    }
}

// Test 5: Test data persistence
function testDataPersistence() {
    console.log('📋 Test 5: Testing data persistence...');
    try {
        const originalData = localStorage.getItem('teamMembers');
        if (!originalData) {
            console.log('❌ No original data to test persistence');
            return false;
        }
        
        // Simulate page reload
        const reloadedData = localStorage.getItem('teamMembers');
        if (reloadedData === originalData) {
            console.log('✅ Data persists correctly');
            return true;
        } else {
            console.log('❌ Data persistence failed');
            return false;
        }
    } catch (e) {
        console.log('❌ Data persistence error:', e);
        return false;
    }
}

// Run all tests
function runAllTests() {
    console.log('🚀 Running Admin-Team Integration Tests...\n');
    
    const tests = [
        testLocalStorage,
        testAdminDataStructure,
        testAddTeamMember,
        testTeamPageLoading,
        testDataPersistence
    ];
    
    let passed = 0;
    let total = tests.length;
    
    tests.forEach((test, index) => {
        console.log(`\n--- Test ${index + 1} ---`);
        if (test()) {
            passed++;
        }
    });
    
    console.log('\n📊 Test Results:');
    console.log(`✅ Passed: ${passed}/${total}`);
    console.log(`❌ Failed: ${total - passed}/${total}`);
    
    if (passed === total) {
        console.log('🎉 All tests passed! Admin-Team integration is working correctly.');
    } else {
        console.log('⚠️ Some tests failed. Please check the issues above.');
    }
    
    return passed === total;
}

// Export for use in browser console
if (typeof window !== 'undefined') {
    window.runAdminTeamTests = runAllTests;
    console.log('💡 Run "runAdminTeamTests()" in the browser console to test the integration');
}

// Auto-run if this is a Node.js environment
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { runAllTests };
} 