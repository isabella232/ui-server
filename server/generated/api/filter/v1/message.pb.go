// Code generated by protoc-gen-gogo. DO NOT EDIT.
// source: temporal/api/filter/v1/message.proto

package filter

import (
	fmt "fmt"
	_ "github.com/gogo/protobuf/gogoproto"
	proto "github.com/gogo/protobuf/proto"
	_ "github.com/gogo/protobuf/types"
	github_com_gogo_protobuf_types "github.com/gogo/protobuf/types"
	v1 "github.com/temporalio/ui-server/v2/server/generated/api/enums/v1"
	io "io"
	math "math"
	math_bits "math/bits"
	reflect "reflect"
	strings "strings"
	time "time"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf
var _ = time.Kitchen

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.GoGoProtoPackageIsVersion3 // please upgrade the proto package

type WorkflowExecutionFilter struct {
	WorkflowId string `protobuf:"bytes,1,opt,name=workflow_id,json=workflowId,proto3" json:"workflow_id,omitempty"`
	RunId      string `protobuf:"bytes,2,opt,name=run_id,json=runId,proto3" json:"run_id,omitempty"`
}

func (m *WorkflowExecutionFilter) Reset()      { *m = WorkflowExecutionFilter{} }
func (*WorkflowExecutionFilter) ProtoMessage() {}
func (*WorkflowExecutionFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_df847f562b02e784, []int{0}
}
func (m *WorkflowExecutionFilter) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *WorkflowExecutionFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_WorkflowExecutionFilter.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *WorkflowExecutionFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowExecutionFilter.Merge(m, src)
}
func (m *WorkflowExecutionFilter) XXX_Size() int {
	return m.Size()
}
func (m *WorkflowExecutionFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowExecutionFilter.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowExecutionFilter proto.InternalMessageInfo

func (m *WorkflowExecutionFilter) GetWorkflowId() string {
	if m != nil {
		return m.WorkflowId
	}
	return ""
}

func (m *WorkflowExecutionFilter) GetRunId() string {
	if m != nil {
		return m.RunId
	}
	return ""
}

type WorkflowTypeFilter struct {
	Name string `protobuf:"bytes,1,opt,name=name,proto3" json:"name,omitempty"`
}

func (m *WorkflowTypeFilter) Reset()      { *m = WorkflowTypeFilter{} }
func (*WorkflowTypeFilter) ProtoMessage() {}
func (*WorkflowTypeFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_df847f562b02e784, []int{1}
}
func (m *WorkflowTypeFilter) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *WorkflowTypeFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_WorkflowTypeFilter.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *WorkflowTypeFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_WorkflowTypeFilter.Merge(m, src)
}
func (m *WorkflowTypeFilter) XXX_Size() int {
	return m.Size()
}
func (m *WorkflowTypeFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_WorkflowTypeFilter.DiscardUnknown(m)
}

var xxx_messageInfo_WorkflowTypeFilter proto.InternalMessageInfo

func (m *WorkflowTypeFilter) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

type StartTimeFilter struct {
	EarliestTime *time.Time `protobuf:"bytes,1,opt,name=earliest_time,json=earliestTime,proto3,stdtime" json:"earliest_time,omitempty"`
	LatestTime   *time.Time `protobuf:"bytes,2,opt,name=latest_time,json=latestTime,proto3,stdtime" json:"latest_time,omitempty"`
}

func (m *StartTimeFilter) Reset()      { *m = StartTimeFilter{} }
func (*StartTimeFilter) ProtoMessage() {}
func (*StartTimeFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_df847f562b02e784, []int{2}
}
func (m *StartTimeFilter) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *StartTimeFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_StartTimeFilter.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *StartTimeFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StartTimeFilter.Merge(m, src)
}
func (m *StartTimeFilter) XXX_Size() int {
	return m.Size()
}
func (m *StartTimeFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_StartTimeFilter.DiscardUnknown(m)
}

var xxx_messageInfo_StartTimeFilter proto.InternalMessageInfo

func (m *StartTimeFilter) GetEarliestTime() *time.Time {
	if m != nil {
		return m.EarliestTime
	}
	return nil
}

func (m *StartTimeFilter) GetLatestTime() *time.Time {
	if m != nil {
		return m.LatestTime
	}
	return nil
}

type StatusFilter struct {
	Status v1.WorkflowExecutionStatus `protobuf:"varint,1,opt,name=status,proto3,enum=temporal.api.enums.v1.WorkflowExecutionStatus" json:"status,omitempty"`
}

func (m *StatusFilter) Reset()      { *m = StatusFilter{} }
func (*StatusFilter) ProtoMessage() {}
func (*StatusFilter) Descriptor() ([]byte, []int) {
	return fileDescriptor_df847f562b02e784, []int{3}
}
func (m *StatusFilter) XXX_Unmarshal(b []byte) error {
	return m.Unmarshal(b)
}
func (m *StatusFilter) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	if deterministic {
		return xxx_messageInfo_StatusFilter.Marshal(b, m, deterministic)
	} else {
		b = b[:cap(b)]
		n, err := m.MarshalToSizedBuffer(b)
		if err != nil {
			return nil, err
		}
		return b[:n], nil
	}
}
func (m *StatusFilter) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StatusFilter.Merge(m, src)
}
func (m *StatusFilter) XXX_Size() int {
	return m.Size()
}
func (m *StatusFilter) XXX_DiscardUnknown() {
	xxx_messageInfo_StatusFilter.DiscardUnknown(m)
}

var xxx_messageInfo_StatusFilter proto.InternalMessageInfo

func (m *StatusFilter) GetStatus() v1.WorkflowExecutionStatus {
	if m != nil {
		return m.Status
	}
	return v1.WORKFLOW_EXECUTION_STATUS_UNSPECIFIED
}

func init() {
	proto.RegisterType((*WorkflowExecutionFilter)(nil), "temporal.api.filter.v1.WorkflowExecutionFilter")
	proto.RegisterType((*WorkflowTypeFilter)(nil), "temporal.api.filter.v1.WorkflowTypeFilter")
	proto.RegisterType((*StartTimeFilter)(nil), "temporal.api.filter.v1.StartTimeFilter")
	proto.RegisterType((*StatusFilter)(nil), "temporal.api.filter.v1.StatusFilter")
}

func init() {
	proto.RegisterFile("temporal/api/filter/v1/message.proto", fileDescriptor_df847f562b02e784)
}

var fileDescriptor_df847f562b02e784 = []byte{
	// 473 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x52, 0x3f, 0x6f, 0xd3, 0x40,
	0x1c, 0xf5, 0x45, 0x25, 0x12, 0x97, 0x00, 0x92, 0x25, 0x0a, 0xcd, 0x70, 0x41, 0x11, 0x43, 0x97,
	0xde, 0xc9, 0x61, 0x33, 0x53, 0x22, 0xb5, 0xa2, 0x03, 0x52, 0x49, 0xa3, 0x20, 0xb1, 0x54, 0x97,
	0xe6, 0x17, 0x73, 0xc2, 0xf6, 0x59, 0xe7, 0xb3, 0x0b, 0x1b, 0x1f, 0xa1, 0x3b, 0x5f, 0x00, 0xf1,
	0x49, 0x18, 0x33, 0x76, 0x02, 0xe2, 0x2c, 0x88, 0x29, 0x1f, 0x01, 0xf9, 0xce, 0x07, 0x44, 0x30,
	0xb0, 0xfd, 0xfe, 0xbc, 0xf7, 0xfc, 0xbb, 0xe7, 0x87, 0x1f, 0x6b, 0x48, 0x32, 0xa9, 0x78, 0xcc,
	0x78, 0x26, 0xd8, 0x52, 0xc4, 0x1a, 0x14, 0x2b, 0x03, 0x96, 0x40, 0x9e, 0xf3, 0x08, 0x68, 0xa6,
	0xa4, 0x96, 0xfe, 0xbe, 0x43, 0x51, 0x9e, 0x09, 0x6a, 0x51, 0xb4, 0x0c, 0x7a, 0xfd, 0x48, 0xca,
	0x28, 0x06, 0x66, 0x50, 0xf3, 0x62, 0xc9, 0xb4, 0x48, 0x20, 0xd7, 0x3c, 0xc9, 0x2c, 0xb1, 0x77,
	0x14, 0x09, 0xfd, 0xba, 0x98, 0xd3, 0x4b, 0x99, 0xb0, 0x48, 0x46, 0xf2, 0x37, 0xb2, 0xee, 0x4c,
	0x63, 0xaa, 0x06, 0xbe, 0x7b, 0x0d, 0xa4, 0x45, 0x92, 0xd7, 0xc7, 0x5c, 0x49, 0xf5, 0x66, 0x19,
	0xcb, 0x2b, 0x8b, 0x1a, 0xbc, 0xc0, 0x0f, 0x5e, 0x36, 0x93, 0xe3, 0xb7, 0x70, 0x59, 0x68, 0x21,
	0xd3, 0x13, 0x73, 0x93, 0xdf, 0xc7, 0x1d, 0x07, 0xbe, 0x10, 0x8b, 0x87, 0xe8, 0x11, 0x3a, 0xbc,
	0x3d, 0xc1, 0x6e, 0x74, 0xba, 0xf0, 0xef, 0xe3, 0xb6, 0x2a, 0xd2, 0x7a, 0xd7, 0x32, 0xbb, 0x5b,
	0xaa, 0x48, 0x4f, 0x17, 0x83, 0x43, 0xec, 0x3b, 0xc9, 0xe9, 0xbb, 0x0c, 0x1a, 0x35, 0x1f, 0xef,
	0xa5, 0x3c, 0x81, 0x46, 0xc6, 0xd4, 0x83, 0x0f, 0x08, 0xdf, 0x3b, 0xd7, 0x5c, 0xe9, 0xa9, 0x48,
	0x1c, 0xee, 0x18, 0xdf, 0x01, 0xae, 0x62, 0x01, 0xb9, 0xbe, 0xa8, 0x1d, 0x30, 0x84, 0xce, 0xb0,
	0x47, 0xad, 0x3d, 0xd4, 0x3d, 0x9a, 0x4e, 0x9d, 0x3d, 0xe3, 0xbd, 0xeb, 0xaf, 0x7d, 0x34, 0xe9,
	0x3a, 0x5a, 0xbd, 0xf0, 0x47, 0xb8, 0x13, 0x73, 0xfd, 0x4b, 0xa4, 0xf5, 0x9f, 0x22, 0xd8, 0x92,
	0xea, 0xf1, 0x60, 0x86, 0xbb, 0xe7, 0x9a, 0xeb, 0x22, 0x6f, 0x2e, 0x3b, 0xc1, 0xed, 0xdc, 0xf4,
	0xe6, 0xa4, 0xbb, 0x43, 0x4a, 0x77, 0xfe, 0xa4, 0x71, 0x98, 0x96, 0x01, 0xfd, 0xcb, 0x4f, 0xab,
	0x32, 0x69, 0xd8, 0xe3, 0x2f, 0x68, 0xb5, 0x26, 0xde, 0xcd, 0x9a, 0x78, 0xdb, 0x35, 0x41, 0xef,
	0x2b, 0x82, 0x3e, 0x56, 0x04, 0x7d, 0xae, 0x08, 0x5a, 0x55, 0x04, 0x7d, 0xab, 0x08, 0xfa, 0x5e,
	0x11, 0x6f, 0x5b, 0x11, 0x74, 0xbd, 0x21, 0xde, 0x6a, 0x43, 0xbc, 0x9b, 0x0d, 0xf1, 0xf0, 0x81,
	0x90, 0xf4, 0xdf, 0xd1, 0x19, 0x77, 0x9f, 0xdb, 0x84, 0x9d, 0xd5, 0xcf, 0x3a, 0x43, 0xaf, 0x9e,
	0xfd, 0x91, 0x14, 0x47, 0x11, 0x92, 0x15, 0xe2, 0x28, 0x07, 0x55, 0xd6, 0xa1, 0x1c, 0xb2, 0xa6,
	0x8a, 0x20, 0x05, 0xc5, 0x35, 0x2c, 0x76, 0x33, 0xfb, 0xd4, 0x56, 0x9f, 0x5a, 0xfb, 0x53, 0xf7,
	0xc9, 0x51, 0x26, 0xa8, 0x75, 0x82, 0xce, 0x82, 0x1f, 0xad, 0x03, 0xb7, 0x08, 0xc3, 0x51, 0x26,
	0xc2, 0xd0, 0xae, 0xc2, 0x70, 0x16, 0xcc, 0xdb, 0xc6, 0xde, 0x27, 0x3f, 0x03, 0x00, 0x00, 0xff,
	0xff, 0x93, 0xbb, 0x22, 0x42, 0x10, 0x03, 0x00, 0x00,
}

func (this *WorkflowExecutionFilter) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*WorkflowExecutionFilter)
	if !ok {
		that2, ok := that.(WorkflowExecutionFilter)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.WorkflowId != that1.WorkflowId {
		return false
	}
	if this.RunId != that1.RunId {
		return false
	}
	return true
}
func (this *WorkflowTypeFilter) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*WorkflowTypeFilter)
	if !ok {
		that2, ok := that.(WorkflowTypeFilter)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Name != that1.Name {
		return false
	}
	return true
}
func (this *StartTimeFilter) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*StartTimeFilter)
	if !ok {
		that2, ok := that.(StartTimeFilter)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if that1.EarliestTime == nil {
		if this.EarliestTime != nil {
			return false
		}
	} else if !this.EarliestTime.Equal(*that1.EarliestTime) {
		return false
	}
	if that1.LatestTime == nil {
		if this.LatestTime != nil {
			return false
		}
	} else if !this.LatestTime.Equal(*that1.LatestTime) {
		return false
	}
	return true
}
func (this *StatusFilter) Equal(that interface{}) bool {
	if that == nil {
		return this == nil
	}

	that1, ok := that.(*StatusFilter)
	if !ok {
		that2, ok := that.(StatusFilter)
		if ok {
			that1 = &that2
		} else {
			return false
		}
	}
	if that1 == nil {
		return this == nil
	} else if this == nil {
		return false
	}
	if this.Status != that1.Status {
		return false
	}
	return true
}
func (this *WorkflowExecutionFilter) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&filter.WorkflowExecutionFilter{")
	s = append(s, "WorkflowId: "+fmt.Sprintf("%#v", this.WorkflowId)+",\n")
	s = append(s, "RunId: "+fmt.Sprintf("%#v", this.RunId)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *WorkflowTypeFilter) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&filter.WorkflowTypeFilter{")
	s = append(s, "Name: "+fmt.Sprintf("%#v", this.Name)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *StartTimeFilter) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 6)
	s = append(s, "&filter.StartTimeFilter{")
	s = append(s, "EarliestTime: "+fmt.Sprintf("%#v", this.EarliestTime)+",\n")
	s = append(s, "LatestTime: "+fmt.Sprintf("%#v", this.LatestTime)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func (this *StatusFilter) GoString() string {
	if this == nil {
		return "nil"
	}
	s := make([]string, 0, 5)
	s = append(s, "&filter.StatusFilter{")
	s = append(s, "Status: "+fmt.Sprintf("%#v", this.Status)+",\n")
	s = append(s, "}")
	return strings.Join(s, "")
}
func valueToGoStringMessage(v interface{}, typ string) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("func(v %v) *%v { return &v } ( %#v )", typ, typ, pv)
}
func (m *WorkflowExecutionFilter) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *WorkflowExecutionFilter) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *WorkflowExecutionFilter) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.RunId) > 0 {
		i -= len(m.RunId)
		copy(dAtA[i:], m.RunId)
		i = encodeVarintMessage(dAtA, i, uint64(len(m.RunId)))
		i--
		dAtA[i] = 0x12
	}
	if len(m.WorkflowId) > 0 {
		i -= len(m.WorkflowId)
		copy(dAtA[i:], m.WorkflowId)
		i = encodeVarintMessage(dAtA, i, uint64(len(m.WorkflowId)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *WorkflowTypeFilter) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *WorkflowTypeFilter) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *WorkflowTypeFilter) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if len(m.Name) > 0 {
		i -= len(m.Name)
		copy(dAtA[i:], m.Name)
		i = encodeVarintMessage(dAtA, i, uint64(len(m.Name)))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *StartTimeFilter) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *StartTimeFilter) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *StartTimeFilter) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.LatestTime != nil {
		n1, err1 := github_com_gogo_protobuf_types.StdTimeMarshalTo(*m.LatestTime, dAtA[i-github_com_gogo_protobuf_types.SizeOfStdTime(*m.LatestTime):])
		if err1 != nil {
			return 0, err1
		}
		i -= n1
		i = encodeVarintMessage(dAtA, i, uint64(n1))
		i--
		dAtA[i] = 0x12
	}
	if m.EarliestTime != nil {
		n2, err2 := github_com_gogo_protobuf_types.StdTimeMarshalTo(*m.EarliestTime, dAtA[i-github_com_gogo_protobuf_types.SizeOfStdTime(*m.EarliestTime):])
		if err2 != nil {
			return 0, err2
		}
		i -= n2
		i = encodeVarintMessage(dAtA, i, uint64(n2))
		i--
		dAtA[i] = 0xa
	}
	return len(dAtA) - i, nil
}

func (m *StatusFilter) Marshal() (dAtA []byte, err error) {
	size := m.Size()
	dAtA = make([]byte, size)
	n, err := m.MarshalToSizedBuffer(dAtA[:size])
	if err != nil {
		return nil, err
	}
	return dAtA[:n], nil
}

func (m *StatusFilter) MarshalTo(dAtA []byte) (int, error) {
	size := m.Size()
	return m.MarshalToSizedBuffer(dAtA[:size])
}

func (m *StatusFilter) MarshalToSizedBuffer(dAtA []byte) (int, error) {
	i := len(dAtA)
	_ = i
	var l int
	_ = l
	if m.Status != 0 {
		i = encodeVarintMessage(dAtA, i, uint64(m.Status))
		i--
		dAtA[i] = 0x8
	}
	return len(dAtA) - i, nil
}

func encodeVarintMessage(dAtA []byte, offset int, v uint64) int {
	offset -= sovMessage(v)
	base := offset
	for v >= 1<<7 {
		dAtA[offset] = uint8(v&0x7f | 0x80)
		v >>= 7
		offset++
	}
	dAtA[offset] = uint8(v)
	return base
}
func (m *WorkflowExecutionFilter) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.WorkflowId)
	if l > 0 {
		n += 1 + l + sovMessage(uint64(l))
	}
	l = len(m.RunId)
	if l > 0 {
		n += 1 + l + sovMessage(uint64(l))
	}
	return n
}

func (m *WorkflowTypeFilter) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	l = len(m.Name)
	if l > 0 {
		n += 1 + l + sovMessage(uint64(l))
	}
	return n
}

func (m *StartTimeFilter) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.EarliestTime != nil {
		l = github_com_gogo_protobuf_types.SizeOfStdTime(*m.EarliestTime)
		n += 1 + l + sovMessage(uint64(l))
	}
	if m.LatestTime != nil {
		l = github_com_gogo_protobuf_types.SizeOfStdTime(*m.LatestTime)
		n += 1 + l + sovMessage(uint64(l))
	}
	return n
}

func (m *StatusFilter) Size() (n int) {
	if m == nil {
		return 0
	}
	var l int
	_ = l
	if m.Status != 0 {
		n += 1 + sovMessage(uint64(m.Status))
	}
	return n
}

func sovMessage(x uint64) (n int) {
	return (math_bits.Len64(x|1) + 6) / 7
}
func sozMessage(x uint64) (n int) {
	return sovMessage(uint64((x << 1) ^ uint64((int64(x) >> 63))))
}
func (this *WorkflowExecutionFilter) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&WorkflowExecutionFilter{`,
		`WorkflowId:` + fmt.Sprintf("%v", this.WorkflowId) + `,`,
		`RunId:` + fmt.Sprintf("%v", this.RunId) + `,`,
		`}`,
	}, "")
	return s
}
func (this *WorkflowTypeFilter) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&WorkflowTypeFilter{`,
		`Name:` + fmt.Sprintf("%v", this.Name) + `,`,
		`}`,
	}, "")
	return s
}
func (this *StartTimeFilter) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&StartTimeFilter{`,
		`EarliestTime:` + strings.Replace(fmt.Sprintf("%v", this.EarliestTime), "Timestamp", "types.Timestamp", 1) + `,`,
		`LatestTime:` + strings.Replace(fmt.Sprintf("%v", this.LatestTime), "Timestamp", "types.Timestamp", 1) + `,`,
		`}`,
	}, "")
	return s
}
func (this *StatusFilter) String() string {
	if this == nil {
		return "nil"
	}
	s := strings.Join([]string{`&StatusFilter{`,
		`Status:` + fmt.Sprintf("%v", this.Status) + `,`,
		`}`,
	}, "")
	return s
}
func valueToStringMessage(v interface{}) string {
	rv := reflect.ValueOf(v)
	if rv.IsNil() {
		return "nil"
	}
	pv := reflect.Indirect(rv).Interface()
	return fmt.Sprintf("*%v", pv)
}
func (m *WorkflowExecutionFilter) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMessage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: WorkflowExecutionFilter: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: WorkflowExecutionFilter: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field WorkflowId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMessage
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMessage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.WorkflowId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field RunId", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMessage
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMessage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.RunId = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMessage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *WorkflowTypeFilter) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMessage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: WorkflowTypeFilter: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: WorkflowTypeFilter: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field Name", wireType)
			}
			var stringLen uint64
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				stringLen |= uint64(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			intStringLen := int(stringLen)
			if intStringLen < 0 {
				return ErrInvalidLengthMessage
			}
			postIndex := iNdEx + intStringLen
			if postIndex < 0 {
				return ErrInvalidLengthMessage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			m.Name = string(dAtA[iNdEx:postIndex])
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMessage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *StartTimeFilter) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMessage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: StartTimeFilter: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: StartTimeFilter: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field EarliestTime", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMessage
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMessage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.EarliestTime == nil {
				m.EarliestTime = new(time.Time)
			}
			if err := github_com_gogo_protobuf_types.StdTimeUnmarshal(m.EarliestTime, dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		case 2:
			if wireType != 2 {
				return fmt.Errorf("proto: wrong wireType = %d for field LatestTime", wireType)
			}
			var msglen int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				msglen |= int(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if msglen < 0 {
				return ErrInvalidLengthMessage
			}
			postIndex := iNdEx + msglen
			if postIndex < 0 {
				return ErrInvalidLengthMessage
			}
			if postIndex > l {
				return io.ErrUnexpectedEOF
			}
			if m.LatestTime == nil {
				m.LatestTime = new(time.Time)
			}
			if err := github_com_gogo_protobuf_types.StdTimeUnmarshal(m.LatestTime, dAtA[iNdEx:postIndex]); err != nil {
				return err
			}
			iNdEx = postIndex
		default:
			iNdEx = preIndex
			skippy, err := skipMessage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func (m *StatusFilter) Unmarshal(dAtA []byte) error {
	l := len(dAtA)
	iNdEx := 0
	for iNdEx < l {
		preIndex := iNdEx
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return ErrIntOverflowMessage
			}
			if iNdEx >= l {
				return io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= uint64(b&0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		fieldNum := int32(wire >> 3)
		wireType := int(wire & 0x7)
		if wireType == 4 {
			return fmt.Errorf("proto: StatusFilter: wiretype end group for non-group")
		}
		if fieldNum <= 0 {
			return fmt.Errorf("proto: StatusFilter: illegal tag %d (wire type %d)", fieldNum, wire)
		}
		switch fieldNum {
		case 1:
			if wireType != 0 {
				return fmt.Errorf("proto: wrong wireType = %d for field Status", wireType)
			}
			m.Status = 0
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				m.Status |= v1.WorkflowExecutionStatus(b&0x7F) << shift
				if b < 0x80 {
					break
				}
			}
		default:
			iNdEx = preIndex
			skippy, err := skipMessage(dAtA[iNdEx:])
			if err != nil {
				return err
			}
			if skippy < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) < 0 {
				return ErrInvalidLengthMessage
			}
			if (iNdEx + skippy) > l {
				return io.ErrUnexpectedEOF
			}
			iNdEx += skippy
		}
	}

	if iNdEx > l {
		return io.ErrUnexpectedEOF
	}
	return nil
}
func skipMessage(dAtA []byte) (n int, err error) {
	l := len(dAtA)
	iNdEx := 0
	depth := 0
	for iNdEx < l {
		var wire uint64
		for shift := uint(0); ; shift += 7 {
			if shift >= 64 {
				return 0, ErrIntOverflowMessage
			}
			if iNdEx >= l {
				return 0, io.ErrUnexpectedEOF
			}
			b := dAtA[iNdEx]
			iNdEx++
			wire |= (uint64(b) & 0x7F) << shift
			if b < 0x80 {
				break
			}
		}
		wireType := int(wire & 0x7)
		switch wireType {
		case 0:
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				iNdEx++
				if dAtA[iNdEx-1] < 0x80 {
					break
				}
			}
		case 1:
			iNdEx += 8
		case 2:
			var length int
			for shift := uint(0); ; shift += 7 {
				if shift >= 64 {
					return 0, ErrIntOverflowMessage
				}
				if iNdEx >= l {
					return 0, io.ErrUnexpectedEOF
				}
				b := dAtA[iNdEx]
				iNdEx++
				length |= (int(b) & 0x7F) << shift
				if b < 0x80 {
					break
				}
			}
			if length < 0 {
				return 0, ErrInvalidLengthMessage
			}
			iNdEx += length
		case 3:
			depth++
		case 4:
			if depth == 0 {
				return 0, ErrUnexpectedEndOfGroupMessage
			}
			depth--
		case 5:
			iNdEx += 4
		default:
			return 0, fmt.Errorf("proto: illegal wireType %d", wireType)
		}
		if iNdEx < 0 {
			return 0, ErrInvalidLengthMessage
		}
		if depth == 0 {
			return iNdEx, nil
		}
	}
	return 0, io.ErrUnexpectedEOF
}

var (
	ErrInvalidLengthMessage        = fmt.Errorf("proto: negative length found during unmarshaling")
	ErrIntOverflowMessage          = fmt.Errorf("proto: integer overflow")
	ErrUnexpectedEndOfGroupMessage = fmt.Errorf("proto: unexpected end of group")
)
