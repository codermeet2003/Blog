import "./ContactInfo.css"

// Exporting the ContactInfo function
export default function ContactInfo(){
    return (
        <div>
            <h1>Contact Us</h1>

            {/* Used Bootstrap Bordered Table */}
            <table className="table-information table table-bordered">
                <tbody>
                    <tr>
                        <th>Sachin Dapkara</th>
                        <td><a href="mailto: lcs2021001@iiitl.ac.in">lcs2021001@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>Meet Savla</th>
                        <td><a href="mailto: lcs2021010@iiitl.ac.in">lcs2021010@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>Guntha Vishal Kumar</th>
                        <td><a href="mailto: lcs2021013@iiitl.ac.in">lcs2021013@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>Ashutosh Rana</th>
                        <td><a href="mailto: lcs2021024@iiitl.ac.in">lcs2021024@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>Billa Naga Phani Teja</th>
                        <td><a href="mailto: lcs2021038@iiitl.ac.in">lcs2021038@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>A B Madhava</th>
                        <td><a href="mailto: lcs2021046@iiitl.ac.in">lcs2021046@iiitl.ac.in</a></td>
                    </tr>
                    <tr>
                        <th>Naveen Uikey</th>
                        <td><a href="mailto: lcs2021055@iiitl.ac.in">lcs2021055@iiitl.ac.in</a></td>
                    </tr>

                </tbody>
            </table>

        </div>
    )
}