import React, { useState, useRef, useEffect } from 'react';
import { FaUsers, FaPaperPlane, FaEllipsisV, FaCrown, FaPlus, FaFile, FaImage, FaVideo } from 'react-icons/fa';
import { FiArrowLeft, FiSettings, FiMoreHorizontal, FiSend, FiPaperclip, FiSmile } from 'react-icons/fi';

export default function GroupPage() {
  const [activePanel, setActivePanel] = useState('chat');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
    {
      id: 1,
      user: 'Sarah Chen',
      role: 'Creative Director',
      message: 'Hey team! Just uploaded the new brand guidelines. Take a look and let me know your thoughts.',
      time: '10:30 AM',
      avatar: 'SC',
      isOwn: false
    },
    {
      id: 2,
      user: 'You',
      role: 'Brand Manager',
      message: 'Great work Sarah! The color palette looks perfect. Should we schedule a review meeting?',
      time: '10:35 AM',
      avatar: 'YU',
      isOwn: true
    },
    {
      id: 3,
      user: 'Mike Rodriguez',
      role: 'Graphic Designer',
      message: 'I love the direction! Already started working on some mockups based on these guidelines.',
      time: '10:42 AM',
      avatar: 'MR',
      isOwn: false
    },
    {
      id: 4,
      user: 'Emma Wilson',
      role: 'Brand Manager',
      message: 'Perfect timing! Our client presentation is next week. This will be exactly what we need.',
      time: '11:15 AM',
      avatar: 'EW',
      isOwn: false
    }
  ]);

  const [members] = useState([
    { id: 1, name: 'Sarah Chen', role: 'Creative Director', status: 'online', avatar: 'SC', isOwner: true },
    { id: 2, name: 'Mike Rodriguez', role: 'Graphic Designer', status: 'online', avatar: 'MR', isOwner: false },
    { id: 3, name: 'Emma Wilson', role: 'Brand Manager', status: 'away', avatar: 'EW', isOwner: false },
    { id: 4, name: 'You', role: 'Brand Manager', status: 'online', avatar: 'YU', isOwner: false },
    { id: 5, name: 'David Park', role: 'UX Designer', status: 'offline', avatar: 'DP', isOwner: false },
    { id: 6, name: 'Lisa Zhang', role: 'Copywriter', status: 'online', avatar: 'LZ', isOwner: false },
    { id: 7, name: 'Alex Kumar', role: 'Video Editor', status: 'away', avatar: 'AK', isOwner: false },
    { id: 8, name: 'Maya Patel', role: 'Photographer', status: 'online', avatar: 'MP', isOwner: false }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        user: 'You',
        role: 'Brand Manager',
        message: message.trim(),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        avatar: 'YU',
        isOwn: true
      };
      setMessages([...messages, newMessage]);
      setMessage('');
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'online': return 'bg-[#800000]';
      case 'away': return 'bg-[#800000]/60';
      case 'offline': return 'bg-[#800000]/30';
      default: return 'bg-[#800000]/30';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F7EADE] via-[#F7EADE]/80 to-[#F7EADE]/60">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-[#800000]/10 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 bg-[#800000]/10 hover:bg-[#800000]/20 rounded-xl flex items-center justify-center transition-colors duration-200">
              <FiArrowLeft className="text-[#800000] text-lg" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-xl flex items-center justify-center shadow-md">
                <FaUsers className="text-white text-lg" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-[#800000] font-serif">Brand Identity 2024</h1>
                <p className="text-sm text-[#800000]/60">{members.filter(m => m.status === 'online').length} members online</p>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-[#800000]/10 hover:bg-[#800000]/20 rounded-xl flex items-center justify-center transition-colors duration-200">
              <FiSettings className="text-[#800000] text-lg" />
            </button>
            <button className="w-10 h-10 bg-[#800000]/10 hover:bg-[#800000]/20 rounded-xl flex items-center justify-center transition-colors duration-200">
              <FiMoreHorizontal className="text-[#800000] text-lg" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex h-[calc(100vh-80px)]">
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col">
          {/* Panel Toggle */}
          <div className="flex border-b border-[#800000]/10 bg-white/60 backdrop-blur-sm">
            <button
              onClick={() => setActivePanel('chat')}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activePanel === 'chat'
                  ? 'text-[#800000] border-b-2 border-[#800000] bg-white/40'
                  : 'text-[#800000]/60 hover:text-[#800000] hover:bg-white/20'
              }`}
            >
              Chat
            </button>
            <button
              onClick={() => setActivePanel('members')}
              className={`px-6 py-3 font-medium transition-all duration-200 ${
                activePanel === 'members'
                  ? 'text-[#800000] border-b-2 border-[#800000] bg-white/40'
                  : 'text-[#800000]/60 hover:text-[#800000] hover:bg-white/20'
              }`}
            >
              Members ({members.length})
            </button>
          </div>

          {/* Chat Panel */}
          {activePanel === 'chat' && (
            <div className="flex-1 flex flex-col">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex gap-3 ${msg.isOwn ? 'flex-row-reverse' : 'flex-row'}`}
                  >
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-full flex items-center justify-center text-white text-sm font-medium shadow-sm">
                        {msg.avatar}
                      </div>
                    </div>
                    <div className={`max-w-md ${msg.isOwn ? 'text-right' : 'text-left'}`}>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-sm font-medium text-[#800000]">{msg.user}</span>
                        <span className="text-xs text-[#800000]/50">{msg.role}</span>
                        <span className="text-xs text-[#800000]/40">{msg.time}</span>
                      </div>
                      <div
                        className={`p-3 rounded-2xl ${
                          msg.isOwn
                            ? 'bg-[#800000] text-white rounded-br-md'
                            : 'bg-white/70 text-[#800000] rounded-bl-md border border-[#800000]/10'
                        }`}
                      >
                        {msg.message}
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white/80 backdrop-blur-sm border-t border-[#800000]/10">
                <div className="flex items-center gap-3">
                  <button className="w-10 h-10 bg-[#800000]/10 hover:bg-[#800000]/20 rounded-xl flex items-center justify-center transition-colors duration-200">
                    <FiPaperclip className="text-[#800000] text-lg" />
                  </button>
                  <div className="flex-1 relative">
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      className="w-full px-4 py-3 bg-white/80 border border-[#800000]/20 rounded-xl focus:outline-none focus:border-[#800000]/40 focus:bg-white transition-all duration-200 text-[#800000] placeholder-[#800000]/40 pr-12"
                    />
                    <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#800000]/40 hover:text-[#800000] transition-colors duration-200">
                      <FiSmile className="text-lg" />
                    </button>
                  </div>
                  <button
                    onClick={handleSendMessage}
                    className="w-12 h-12 bg-[#800000] hover:bg-[#800000]/90 rounded-xl flex items-center justify-center transition-all duration-200 hover:shadow-lg"
                  >
                    <FiSend className="text-white text-lg" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Members Panel */}
          {activePanel === 'members' && (
            <div className="flex-1 overflow-y-auto p-6">
              <div className="space-y-4">
                {/* Add Member Button */}
                <button className="w-full flex items-center gap-3 p-4 bg-white/60 hover:bg-white/80 backdrop-blur-sm rounded-2xl border border-[#800000]/10 hover:border-[#800000]/20 transition-all duration-200 text-left">
                  <div className="w-12 h-12 bg-[#800000]/10 rounded-xl flex items-center justify-center">
                    <FaPlus className="text-[#800000] text-lg" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#800000]">Invite Members</h3>
                    <p className="text-sm text-[#800000]/60">Add new team members to this group</p>
                  </div>
                </button>

                {/* Members List */}
                {members.map((member) => (
                  <div
                    key={member.id}
                    className="flex items-center justify-between p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-[#800000]/10 hover:border-[#800000]/20 transition-all duration-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#800000] to-[#800000]/80 rounded-xl flex items-center justify-center text-white font-medium shadow-sm">
                          {member.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-4 h-4 ${getStatusColor(member.status)} rounded-full border-2 border-white`}></div>
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium text-[#800000]">{member.name}</h3>
                          {member.isOwner && (
                            <FaCrown className="text-[#800000]/60 text-sm" />
                          )}
                        </div>
                        <p className="text-sm text-[#800000]/60">{member.role}</p>
                        <p className="text-xs text-[#800000]/40 capitalize">{member.status}</p>
                      </div>
                    </div>
                    <button className="w-8 h-8 bg-[#800000]/10 hover:bg-[#800000]/20 rounded-lg flex items-center justify-center transition-colors duration-200">
                      <FaEllipsisV className="text-[#800000]/60 text-sm" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}