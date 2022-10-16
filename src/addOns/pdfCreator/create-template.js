const React = require('react');
const ReactPDF = require('@react-pdf/renderer');
const { Page, Text, View, Document, StyleSheet } = require('@react-pdf/renderer');
// import React from "react";
// import ReactPDF, {
//     Page,
//     Text,
//     View,
//     Document,
//     StyleSheet,
// } from "@react-pdf/renderer";

// type TemplateData = {
//     companyName: string;
//     companyPhone: string;
//     companyEmail: string;
//     receiptNumber: string;
//     datePaid: string,
//     paymentMethod: string,
//     amount: string
// };

// interface PDFProps {
//     data: TemplateData;
// }

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#FFF',
        padding: '30px'
    },
    section: {
        margin: 10,
        padding: 10,
        // backgroundColor: 'blue',
    },
    heading: {
        fontSize: 24,
        fontWeight: 600,
        color: '#131925',
        marginBottom: 8,
    },
    statement: {
        fontSize: 20,
        color: '#131925',
        lineHeight: 1.4,
        marginBottom: 4,
    },
    divider: {
        width: '100%',
        height: 1,
        backgroundColor: '#999999',
        margin: '24px 0 24px 0',
    },
    paragraph: {
        fontSize: 12,
        color: '#212935',
        lineHeight: 1.67,
    },
    columnParent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    columnStart: {
        flex: 1,
    },
    columnEnd: {
        flex: 1,
        alignItems: 'flex-end',
    },
});

// const PDF = ({ data }: PDFProps) => {
const PDF = (data) => {
    // console.log(data);
    return React.createElement(
        Document,
        null,
        React.createElement(
            Page,
            { size: 'A4', style: styles.page },
            React.createElement(
                View,
                { style: styles.section },
                React.createElement(
                    View,
                    { style: styles.head },
                    React.createElement(Text, { style: styles.title }, 'Exam question sheet'),
                    React.createElement(
                        View,
                        { style: styles.details },
                        React.createElement(
                            View,
                            { style: styles.leftColumn },
                            React.createElement(Text, { style: styles.type }, 'Course ID:'),
                            React.createElement(Text, { style: styles.data }, data.internalRef),
                            React.createElement(Text, { style: styles.type }, 'Course title:'),
                            React.createElement(Text, { style: styles.data }, data.title),
                            React.createElement(Text, { style: styles.type }, 'Location:'),
                            React.createElement(Text, { style: styles.data }, data.location)
                        ),
                        React.createElement(
                            View,
                            { style: styles.rightColumn },
                            React.createElement(Text, { style: styles.type }, 'Exam phase:'),
                            React.createElement(Text, { style: styles.data }, data.phase),
                            React.createElement(Text, { style: styles.type }, 'Number of questions:'),
                            React.createElement(Text, { style: styles.data }, data.questionsQty),
                            React.createElement(Text, { style: styles.type }, 'Time allowed:'),
                            React.createElement(Text, { style: styles.data }, data.time)
                        ),
                        React.createElement(
                            Text,
                            { style: styles.note },

                            `Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.
                            Note:You can mark on the question sheet but it will not be considered during the marking. After the exam is completed, you shall return it to the invigilator. You are not allowed to take pictures of it, or any other means of copying the questions.`
                        )
                    )
                )
            ),
            React.createElement(View, { style: styles.divider }),
            // React.createElement(
            //     View,
            //     { style: styles.content },
            //     content.map(x => React.createElement(
            //         View,
            //         { style: styles.group },
            //         x.map(y => React.createElement(
            //             View,
            //             { style: styles.question },
            //             React.createElement(
            //                 Text,
            //                 { style: styles.ask },
            //                 num++,
            //                 ". ",
            //                 y.question
            //             ),
            //             React.createElement(
            //                 Text,
            //                 { style: styles.answer },
            //                 "A. ",
            //                 y.ansA
            //             ),
            //             React.createElement(
            //                 Text,
            //                 { style: styles.answer },
            //                 "B. ",
            //                 y.ansB
            //             ),
            //             React.createElement(
            //                 Text,
            //                 { style: styles.answer },
            //                 "C. ",
            //                 y.ansC
            //             )
            //         ))
            //     ))
            // ),
            React.createElement(View, { style: styles.footer }, React.createElement(Text, null, ' Page No'))
        )
    );
};

// export default async (data: TemplateData) => {

exports.createTemplate = async (data) => {
    return await ReactPDF.renderToStream(React.createElement(PDF, { ...data }));
    // return await ReactPDF.renderToStream(React.createElement(PDF, { data }));
    // return await ReactPDF.renderToStream(<PDF {...{ data }} />);
};

// export default  createTemplate async (data) => {
//     return await ReactPDF.renderToStream(<PDF {...{ data }} />);
// };
