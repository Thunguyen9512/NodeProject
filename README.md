       //handle checkbox
        const selectAllCheckbox = document.getElementById("select-all-checkbox")
        const courseCheckboxs = document.getElementsByClassName("course-check-box")
        const noOfCheckbox = courseCheckboxs.length
        let isSelectedAll = false

        selectAllCheckbox.onchange = () => {
            for (i = 0; i < courseCheckboxs.length; i++) {
                courseCheckboxs[i].checked = selectAllCheckbox.checked
                console.log(courseCheckboxs[i].checked)
            }
        }

        for (i = 0; i < courseCheckboxs.length; i++) {
            courseCheckboxs[i].onchange = (e) => {
                let noOfCheckedbox = 0
                for (i = 0; i < courseCheckboxs.length; i++) {
                    if (courseCheckboxs[i].checked) {
                        noOfCheckedbox++;
                        console.log("noOfCheckbox", noOfCheckedbox)
                    }
                }
                isSelectedAll = noOfCheckedbox === noOfCheckbox ? true : false
                selectAllCheckbox.checked = isSelectedAll
            }
        }