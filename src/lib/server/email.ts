import type { Student, Team } from '$lib/server/schema';

import { BREVO_KEY } from '$env/static/private';

const sendEmail = async (htmlContent: string, to: { email: string; name: string }[]) => {
	const data = {
		sender: {
			name: 'Bangmod Hackathon 2024',
			email: 'bangmodhackathon2024@gmail.com'
		},
		to: to,
		headers: {
			charset: 'utf-8'
		},
		subject: 'สมัคร Bangmod Hackathon 2024 สำเร็จแล้ว',
		htmlContent: htmlContent
	};

	const response = await fetch('https://api.brevo.com/v3/smtp/email', {
		method: 'POST',
		headers: {
			'api-key': BREVO_KEY,
			accept: 'application/json',
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(data)
	});

	if (!response.ok) {
		throw new Error(await response.text());
	}

	return true;
};

const prepareMail = (students: Student[], team: Omit<Team, 'students'>) => {
	const studentsInfo = students.map((student, i) => {
		return `
			<h2>ผู้เข้าแข่งขันท่านที่ ${i + 1}</h2>
			<dt>ชื่อ:</dt>
			<dd>${student.name_prefix}${student.name_prefix} ${student.name_prefix}</dd>
			<dt>ชื่อเล่น:</dt>
			<dd>${student.nickname}</dd>
			<dt>วันเกิด:</dt>
			<dd>${student.date_of_birth}</dd>
			<dt>เชื้อชาติ:</dt>
			<dd>${student.race}</dd>
			<dt>สัญชาติ:</dt>
			<dd>${student.nationality}</dd>
			<dt>ศาสนา:</dt>
			<dd>${student.religion}</dd>
			<dt>เบอร์โทรศัพท์:</dt>
			<dd>${student.phone}</dd>
			<dt>ระดับชั้นปี:</dt>
			<dd>${student.level}</dd>
			<dt>อีเมล:</dt>
			<dd>${student.email}</dd>
			<dt>ช่องทางการติดต่ออื่นๆ:</dt>
			<dd>${student.contact}</dd>
			<dt>ที่อยู่ปัจจุบัน:</dt>
			<dd>
				${student.address} ${student.sub_district}<br/>
				${student.district} ${student.province} ${student.zipcode}
			</dd>
			<dt>อาหารที่แพ้:</dt>
			<dd>${student.allergies}</dd>
			<dt>ยาที่แพ้:</dt>
			<dd>${student.drug}</dd>
			<dt>โรคประจำตัว:</dt>
			<dd>${student.disease}</dd>
            `;
	});

	return `
		<!DOCTYPE html>
		<html lang="th">
		<body>
		<h1>สมัคร Bangmod Hackathon 2024 สำเร็จแล้ว</h1> 
		<p>โดยทีมของท่านมีรายละเอียดของทีมดังนี้</p>

		<p>ทีม: ${team.name}</p>
		<p>โรงเรียน: ${team.school_name}</p>

		<h2>อาจารย์ที่ปรึกษา</h2>
		<dl>
		<dt>ชื่อ:</dt>
		<dd>${team.teacher_prefix}${team.teacher_firstname} ${team.teacher_lastname}</dd>
		<dt>เบอร์โทรศัพท์:</dt>
		<dd>${team.teacher_phone}</dd>
		<dt>อีเมล:</dt>
		<dd>${team.teacher_email}</dd>
		<dt>ช่องทางการติดต่ออื่นๆ:</dt>
		<dd>${team.teacher_contact}</dd>
		<dt>ที่อยู่ปัจจุบัน:</dt>
		<dd>
			${team.teacher_address} ${team.teacher_sub_district}<br/>
			${team.teacher_district} ${team.teacher_province} ${team.teacher_zipcode}
        </dd>
		<dt>อาหารที่แพ้:</dt>
		<dd>${team.teacher_allergies}</dd>
		<dt>ยาที่แพ้:</dt>
		<dd>${team.teacher_drug}</dd>
		<dt>โรคประจำตัว:</dt>
        </dl>
        
        ${studentsInfo.join('<br/><br/>')}
        
        </body>
        </html>
        `;
};

export { sendEmail, prepareMail };
